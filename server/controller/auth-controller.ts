import bcrypt from "bcryptjs";
import prisma from "../db/db";
import jwt from "jsonwebtoken";

export const Register = async (req: any, res: any) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res
      .status(400)
      .json({ message: "Please provide all the required fields" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    return res
      .status(201)
      .json({ message: "User created successfully", success: true });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating user....", success: false });
  }
};

export const Login = async (req: any, res: any) => {
  const { email, password } = req.body;

  console.log(req.body);

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all the required fields" });
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!existingUser) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({
        message: "JWT_SECRET is not defined in environment variables",
      });
    }

    const token = jwt.sign(
      {
        _id: existingUser.id,
        email: existingUser.email,
        name: existingUser.name,
      },
      jwtSecret,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600 * 1000,
    });

    return res
      .status(200)
      .json({ token, success: true, message: "Logged in successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error logging in" });
  }
};
