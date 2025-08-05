import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import Admin from "../models/Admin.js";

export const signupAdmin = async (req, res, next) => {
    const { email, password, confirmPassword } = req.body;
    const errors = validationResult(req);

    const existingUser = await Admin.findOne({ where: { email: email } });

    if (existingUser) {
        return res.status(400).json({
            message: "A user with this email already exists.",
        });
    }

    if (!errors.isEmpty) {
        return res.status(422).json({
            message: "Validation failed.",
            errors: errors.array(),
            oldInput: {
                email,
                password,
                confirmPassword,
            },
        });
    }

    try {
        const hashedPw = await bcrypt.hash(password, 12);

        await Admin.create({
            email: email,
            password: hashedPw,
        });

        res.status(201).json({
            message: "Admin created",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const loginAdmin = async (req, res, next) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            message: "Validation failed.",
            errors: errors.array(),
            oldInput: {
                email,
                password,
            },
        });
    }

    try {
        const admin = await Admin.findOne({ where: { email: email } });
        if (!admin) {
            return res
                .status(404)
                .json({ message: "Could not find a user with this email." });
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!admin || !isMatch) {
            return res.status(401).json({
                message: "Wrong username or password.",
            });
        }

        const token = jwt.sign(
            { email: admin.email, id: admin.id },
            process.env.JWT_SECRET,
            { expiresIn: "12h" }
        );

        return res.status(200).json({
            admin: {
                email: admin.email,
                id: admin.id,
                token: token,
            },
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
