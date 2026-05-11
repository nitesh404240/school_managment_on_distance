
import db from "../config/db.js"
//const calculateDistance = require('../utils/distanceCalculator');
import { calculateDistance } from "../utils/distanceCalc.js";
export const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (
        !name ||
        !address ||
        latitude === undefined ||
        longitude === undefined
    ) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    if (
        typeof latitude !== 'number' ||
        typeof longitude !== 'number'
    ) {
        return res.status(400).json({
            success: false,
            message: "Latitude and Longitude must be numbers"
        });
    }

    const query =
        `INSERT INTO schools (name, address, latitude, longitude)
         VALUES (?, ?, ?, ?)`;

    db.query(
        query,
        [name, address, latitude, longitude],
        (err, result) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database Error",
                    error: err
                });
            }

            res.status(201).json({
                success: true,
                message: "School Added Successfully"
            });
        }
    );
};

export const listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({
            success: false,
            message: "Latitude and Longitude are required"
        });
    }

    db.query(`SELECT * FROM schools`, (err, results) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        const userLat = parseFloat(latitude);
        const userLon = parseFloat(longitude);

        const schoolsWithDistance = results.map((school) => {
            const distance = calculateDistance(
                userLat,
                userLon,
                school.latitude,
                school.longitude
            );

            return {
                ...school,
                distance: distance.toFixed(2) + " KM"
            };
        });

        schoolsWithDistance.sort((a, b) => {
            return parseFloat(a.distance) - parseFloat(b.distance);
        });

        res.status(200).json({
            success: true,
            schools: schoolsWithDistance
        });
    });
};