import { connectDB } from "@/utils/database";
import { Expense } from "@/models/expense";
import { NextRequest, NextResponse } from "next/server";
import { Finance } from "@/models/finance";

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
      return new NextResponse("No expense found with this id", { status: 400 });

    const deletedExpense = await Expense.findByIdAndDelete(params.id);

    return new NextResponse(
      JSON.stringify({
        message: "Expense deleted successfully",
        deletedExpense: deletedExpense,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error deleting this expense", error);
    return new NextResponse("Error deleting this expense", { status: 500 });
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: Props }
) => {
  try {
    const { itemName, amount, category, priority } = await request.json();
    if (!itemName || !amount || !category || !priority)
      return new NextResponse("Some fields are missing", { status: 400 });

    await connectDB();

    const finance = await Finance.findOne();
    if (!finance)
      return new NextResponse(
        "Finance details are not set, kindly first set the finance details",
        {
          status: 404,
        }
      );

    const existingExpense = await Expense.findById(params.id);
    if (!existingExpense)
      return new NextResponse("No expense found with this id", { status: 400 });

    // Calculate the total expenses excluding the expense being updated
    const totalExpenses = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);

    const currentTotalExpenses = totalExpenses[0]?.total || 0;
    const adjustedTotalExpenses =
      currentTotalExpenses - existingExpense + amount;

    const isOverBudget = adjustedTotalExpenses > finance.budget;
    console.log("Over Budget Flag : ", isOverBudget);

    const updatedExpense = await Expense.findByIdAndUpdate(
      params.id,
      {
        itemName: itemName,
        amount: amount,
        category: category,
        priority: priority,
        isOverBudget: isOverBudget,
      },
      { new: true }
    );

    return new NextResponse(
      JSON.stringify({
        message: "Expense updated successfully",
        updatedExpense: updatedExpense,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Error updating expense: ", error);
    return new NextResponse("Error updating expense", { status: 500 });
  }
};
