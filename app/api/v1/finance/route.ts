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

    const calculatedSavings = income - budget;

    if (calculatedSavings < 0) {
      return new NextResponse("Savings Can't be Negative!", {status:400})
    }
    let finance = await Finance.findOne();

    if (finance) {
      finance.income = income;
      finance.budget = budget;
      finance.savings = calculatedSavings;
      await finance.save();
    } else {
      finance = new Finance({
        income: income || 0,
        budget: budget || 0,
        savings: calculatedSavings || 0,
      });
      await finance.save();
    }

    return new NextResponse(
      JSON.stringify({ message: "Finance Created", finance: finance }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error Creating Finance", error);
    return new NextResponse("Error Creating Finance!", { status: 500 });
  }
};
