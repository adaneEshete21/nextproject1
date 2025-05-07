import { NextRequest } from "next/server";
import NextResponse from "next/server";
import Joinus from "../../../models/Joinus";
import dbConnect from "../../../utils/mongodb";

export async function POST(request) {
    try {
        const { name, email, description } = await request.json(); // Parse the request body
        console.log("Data from front are:", name, email, description);
    
        // Validate request body
        if (!name || !email || !description) {
        return NextResponse.json(
            { message: "All fields are required" },
            { status: 400 }
        );
        }
    
        // Connect to the database
        await dbConnect();
    
        // Check if user already exists
        const existingUser = await Joinus.findOne({ email });
        if (existingUser) {
        return NextResponse.json(
            { message: "User already exists" },
            { status: 409 }
        );
        }
    
        // Create a new user
        const newUser = new Joinus({
        name,
        email,
        description,
        });
    
        // Save the user to the database
        await newUser.save();
    
        return NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
        );
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json(
        { message: "Internal server error" },
        { status: 500 }
        );
    }
    }
