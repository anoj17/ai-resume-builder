import prisma from "./db/db";
import jwt from "jsonwebtoken";

interface CustomJwtPayload {
  _id?: string;
  email?: string;
  name?: string;
}

const protectedRoute = async (req: any, res: any, next: any) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    const envToken = process.env.JWT_SECRET;

    if (!envToken) {
      return res.status(500).json({
        message:
          "Internal server error - JWT_SECRET is not defined in environment variables",
      });
    }

    const decoded = jwt.verify(token, envToken) as CustomJwtPayload;

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: decoded.email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error("Error in protectedRoute middleware:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export default protectedRoute;
