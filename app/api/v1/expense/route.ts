import { connectDB } from "@/utils/database";
import { Expense } from "@/models/expense";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();
    const expenses = await Expense.find().sort({ createAt: -1 });
    return new NextResponse(
      JSON.stringify({
        expenses: expenses,
      })
    );
  } catch (error) {
    console.log("Error fetching all expenses", error);
    return new NextResponse("Error fetching all expenses", { status: 500 });
  }
};
export const POST = async (request: NextRequest) => {
  try {
    await connectDB();
    const { itemName, amount, category, priority } = await request.json();
    if (!itemName || !amount || !category || !priority)
      return new NextResponse("Some fields are missing!", { status: 400 });

    const newExpense = await Expense.create({
      itemName: itemName,
      amount: amount,
      category: category,
      priority: priority,
    });

    return new NextResponse(
      JSON.stringify({
        message: "Expense is created",
        newExpense: newExpense,
      })
    );
  } catch (error) {
    console.log("Error creating expense", error);
  }
};
