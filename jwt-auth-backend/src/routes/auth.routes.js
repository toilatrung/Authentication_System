import express from "express";
import { register, login } from "#controllers/auth.controller";
import { registerValidator, loginValidator } from "#validators/auth.validator";
import validate from "#middlewares/validate.middleware";
import asyncHandler from "#utils/asyncHandler";

const router = express.Router();

router.post(
  "/register",
  registerValidator,
  validate,
  asyncHandler(register)
);

router.post(
  "/login",
  loginValidator,
  validate,
  asyncHandler(login)
);

export default router;