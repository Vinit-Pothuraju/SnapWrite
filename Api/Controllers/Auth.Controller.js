import { handleError } from "../helpers/handleError.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const Register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      // user already registerd
      next(handleError(409, "user already registered"));
    }
    // new register
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });
    await user.save();

    res.status(200).json({
      success: true,
      message: "Registration Successfull",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      next(handleError(404, "Invalid Login Credentials"));
    }
    const hashedPassword = user.password;
    const comparepassword = bcryptjs.compare(password, hashedPassword);
    if (!comparepassword) {
      next(handleError(404, "Invalid Login Credentials"));
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      process.env.JWT_SECRET
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.node.NODE_ENV === "production",
      sameSite: process.env.node.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });
    const newUser = user.toObject({ getters: true });
    delete newUser.password;

    res.status(200).json({
      success: true,
      user:newUser,
      message: "Login Successful",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
export const GoogleLogin = async (req, res, next) => {
  try {
    const { username, email, avatar } = req.body;
    let user;
    user = await User.findOne({ email });
    if (!user) {
      const password = (Math.random() * 10000000).toString();
      const hashedPassword = bcryptjs.hashSync(password);
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        avatar,
      });
      user = await newUser.save();
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
      },
      process.env.JWT_SECRET
    );

    res.cookie("access_token", token, {
      httpOnly: true,
      secure: process.env.node.NODE_ENV === "production",
      sameSite: process.env.node.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });
    const newUser = user.toObject({ getters: true });
    delete newUser.password;

    res.status(200).json({
      success: true,
      user:newUser,
      message: "Login Successful",
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};
