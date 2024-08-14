import { connectDB } from "@/utils/database";
import { Expense } from "@/models/expense";
import { NextRequest, NextResponse } from "next/server";

interface Props {
  id: string;
}

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Props }
) => {
  try {
    await connectDB();
    const expense = await Expense.findById(params.id);
    if (!expense)
      return new NextResponse("The Expense Exist with the given Id!", {
        status: 400,
      });
    const deletedExpense = await Expense.findByIdAndDelete(params.id);
    return new NextResponse(
      JSON.stringify({
        message: "Expense Deleted",
        deletedExpense: deletedExpense,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error deleting expense!", error);
    return new NextResponse("Error Deleting Expense!", { status: 500 });
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: Props }
) => {
  try {
    await connectDB();
    const { itemName, amount, category, priority } = await request.json();
    if (!itemName || !amount || !category || !priority)
      return new NextResponse("Some fields are missing!", { status: 400 });

    const updatedExpense = await Expense.findByIdAndUpdate(
      params.id,
      {
        itemName: itemName,
        amount: amount,
        category: category,
        priority: priority,
      },
      { new: true }
    );

    return new NextResponse(
      JSON.stringify({
        message: "Expense is created",
        updatedExpense: updatedExpense,
      })
    );
  } catch (error) {
    console.log("Error creating expense", error);
    return new NextResponse("Error Updating Expenses!", { status: 500 });
  }
};
