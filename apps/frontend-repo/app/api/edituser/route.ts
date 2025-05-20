import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { body, headers } = await req.json();
    const response = await fetch(`${process.env.LOCAL_HOST}/update-user-data/${body.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: headers.Authorization },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
