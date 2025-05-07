import { NextResponse } from "next/server";
import dbConnect from "../../../utils/mongodb";
import User from "../../../models/User"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET_KEY;
const options = {
  expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // 1 day
};

export async function POST(request) {
  try {
    const { name, password, email, phone } = await request.json(); // Parse the request body
    console.log("Data from front:", name, password, email, phone);

    // Validate request body
    if (!name || !password || !email || !phone) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }

    if (!secretKey) {
      throw new Error("JWT_SECRET_KEY is not defined in environment variables");
    }

    // Connect to the database
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("Hashed password:", hashedPassword);

    // Create a new user
    const newUser = new User({
      name,
      password: hashedPassword,
      email,
      phone,
    });

    await newUser.save(); // Save the new user to the database

    // Generate a JWT token
    const token = jwt.sign({ id: newUser._id }, secretKey, {
      expiresIn: "1d",
    });

    // Set the token in cookies
    const response = NextResponse.json({
      message: "User created successfully",
    });
    response.cookies.set("authToken", token, options);
    return response;
  } catch (error) {
    console.error("Error:", error.message);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
