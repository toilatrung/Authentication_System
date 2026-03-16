import User from "#models/user/user.model";

export const registerUser = async (data) => {

  const { name, email, username, password, avatar, bio } = data;

  const existingEmail = await User.findOne({ email });

  if (existingEmail) {
    throw new Error("Email already exists");
  }

  const existingUsername = await User.findOne({ username });

  if (existingUsername) {
    throw new Error("Username already exists");
  }

  const user = await User.create({
    name,
    email,
    username,
    password,
    avatar,
    bio
  });

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    username: user.username
  };

};

export const loginUser = async ({ identifier, password }) => {

  const isEmail = identifier.includes("@");

  const query = isEmail
    ? { email: identifier }
    : { username: identifier };

  const user = await User.findOne(query).select("+password");

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await user.comparePassword(password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return {
    id: user._id,
    name: user.name,
    email: user.email,
    username: user.username
  };

};