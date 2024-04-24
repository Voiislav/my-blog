import { NextResponse } from "next/server";
import type { NewUser } from "~/utils/types/NewUser";
import { db } from "~/server/db";
import { hash } from "bcrypt";

export async function POST(req: Request) {
  try {
    const reqBody: NewUser = (await req.json()) as NewUser;

    const { name, email, password } = reqBody;

    const existingUser = await db.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "User with this e-mail already exists" },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: "You have successfully registered" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
