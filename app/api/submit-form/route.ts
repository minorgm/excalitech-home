import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const googleSheetURL = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL || "";
  const body = await request.json();

  try {
    const response = await fetch(googleSheetURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    const transformed = { ...data, source: "proxied-through-nextjs" };

    return new Response(JSON.stringify(transformed), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Internal Server Error: ", error);
    return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
  }
}
