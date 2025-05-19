import { NextRequest, NextResponse } from "next/server";

const mockUser = {
  email: "joe@email.com",
  password: "123456",
};

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  // if (email === mockUser.email && password === mockUser.password) {
  //   const token = jwt.sign({ email }, process.env.JWT_SECRET!, {
  //     expiresIn: "1h",
  //   });

  //   return NextResponse.json({ message: "Login successful", token }, { status: 200 });
  // }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
