import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  console.log(request);

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created successfully", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
