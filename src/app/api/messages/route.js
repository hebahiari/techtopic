import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Message from "@/models/Message";

export const POST = async (request) => {
  const { name, email, message } = await request.json();

  await connect();

  const newMessage = new Message({
    name,
    email,
    message,
  });

  try {
    await newMessage.save();
    return new NextResponse("Message Sent!", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
