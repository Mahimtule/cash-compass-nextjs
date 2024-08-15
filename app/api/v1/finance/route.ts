import { connectDB } from "@/utils/database";
import { Finance } from "@/models/finance";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();
    const finance = await Finance.find();
    return new NextResponse(JSON.stringify({ finance: finance }));
  } catch (error) {
    console.log("Error fetching finance", error);
    return new NextResponse("Error fetching finance", { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    await connectDB();
    const { income, budget } = await request.json();

    if (!income || !budget)
      return new NextResponse("Some fields are missing", { status: 400 });

    const calculatedSavings = income - budget;

    const newFinance = await Finance.create({
      income: income,
      savings: calculatedSavings,
      budget: budget,
    });

    return new NextResponse(
      JSON.stringify({ message: "Finance Created", newFinance: newFinance }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error Creating Finance", error);
    return new NextResponse("Error Creating Finance!", { status: 500 });
  }
};
