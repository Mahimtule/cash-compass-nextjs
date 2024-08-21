import { connectDB } from "@/utils/database";
import { Expense } from "@/models/expense";
import { NextRequest, NextResponse } from "next/server";
import { Finance } from "@/models/finance";

export const GET = async (request: NextRequest) => {
  try {
    await connectDB();
    const expenses = await Expense.find().sort({ createdAt: -1 });
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

    const finance = await Finance.findOne();

    if (!finance)
      return new NextResponse("Finance details are not set", { status: 404 });

    const totalExpenses = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    const currentTotalExpenses = totalExpenses[0]?.total || 0;
    const newTotalExpenses = currentTotalExpenses + amount;

    const isOverBudget = newTotalExpenses > finance.budget;

    const newExpense = await Expense.create({
      itemName: itemName,
      amount: amount,
      category: category,
      priority: priority,
      isOverBudget: isOverBudget,
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
