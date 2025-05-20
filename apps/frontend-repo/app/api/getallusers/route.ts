import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`${process.env.LOCAL_HOST}/fetch-user-data`, {
      method: "GET",
      headers: { "Content-Type": "application/json", Authorization: req.headers.get("Authorization") as string },
    });

    console.log(response.body);

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.log("ERROR : ", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
