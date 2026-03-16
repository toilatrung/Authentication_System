import mongoose from "mongoose";

import userSchema from "./user.schema.js";
import { hashPasswordHook } from "./user.hooks.js";
import { userMethods } from "./user.methods.js";

hashPasswordHook(userSchema);
userMethods(userSchema);

const User = mongoose.model("User", userSchema);

export default User;