import { body } from "express-validator";

export const registerValidator = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 50 }),

  body("username")
    .trim()
    .notEmpty()
    .withMessage("Username is required")
    .isLength({ min: 3, max: 30 })
    .matches(/^[a-z0-9_.]+$/)
    .withMessage("Invalid username format")
    .toLowerCase(),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 }),

  body("avatar")
    .optional()
    .isURL()
    .withMessage("Avatar must be a valid URL"),

  body("bio")
    .optional()
    .isLength({ max: 160 })
];

export const loginValidator = [
  body("identifier")
    .trim()
    .notEmpty()
    .withMessage("Identifier is required"),

  body("password")
    .notEmpty()
    .withMessage("Password is required")
];