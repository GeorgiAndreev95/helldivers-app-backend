import express from "express";
import { body } from "express-validator";

import Admin from "../models/Admin.js";
import { signupAdmin, loginAdmin } from "../controllers/adminController.js";

const router = express.Router();

router.post(
    "/signup",
    [
        body("email")
            .isEmail()
            .withMessage("Please enter a valid email.")
            .normalizeEmail(),
        body("password").trim().isLength({ min: 6 }),
        body("confirmPassword")
            .trim()
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error("Passwords do not match.");
                }
                return true;
            }),
    ],
    signupAdmin
);

router.post(
    "/login",
    [
        body("email").isEmail().withMessage("Please enter a valid email."),
        body("password")
            .trim()
            .isLength({ min: 6 })
            .withMessage("Please enter a valid password."),
    ],
    loginAdmin
);

export default router;
