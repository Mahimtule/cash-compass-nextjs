"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Trash } from "lucide-react";

interface ExpensesProps {
  _id: string;
  itemName: string;
  amount: number;
  category: string;
  priority: string;
  isOverBudget: boolean;
  createdAt: Date;
}

const page = () => {
  const [expenses, setExpenses] = useState<ExpensesProps[]>([]);
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get("/api/v1/expense");
        setExpenses(response.data.expenses);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/v1/expense/${id}`);
      setExpenses((prevExpenses) =>
        prevExpenses.filter((expense) => expense._id !== id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full min-h-full">
      <div className="mb-3 flex flex-col justify-center items-start">
        <h1 className="text-lg font-medium">Over Budget</h1>
        <p className="text-muted-foreground text-sm">
          You can Delete the Expense with the low Priority to adjust the
          budget
        </p>
      </div>
      <Table className="border w-full bg-white">
        <TableHeader>
          <TableRow>
            <TableHead>Item Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.length > 0 ? (
            expenses.map(
              (expense) =>
                expense.isOverBudget && (
                  <TableRow
                    key={expense._id}
                    className={`${
                      expense.priority === "low" ? "bg-red-500 text-white" : ""
                    }`}
                  >
                    <TableCell>{expense.itemName}</TableCell>
                    <TableCell>₹{expense.amount}</TableCell>
                    <TableCell>{expense.category}</TableCell>
                    <TableCell>
                      <p
                        className={`font-medium px-3 py-1 rounded-full text-white w-fit ${
                          expense.priority === "low"
                            ? "bg-green-500"
                            : expense.priority === "mid"
                            ? "bg-yellow-400"
                            : "bg-red-600"
                        }`}
                      >
                        {expense.priority}
                      </p>
                    </TableCell>
                    <TableCell>
                      {new Date(expense.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="flex justify-center items-center gap-2">
                      <Button
                        size="icon"
                        onClick={() => handleDelete(expense._id)}
                      >
                        <Trash width={16} height={16} />{" "}
                      </Button>
                    </TableCell>
                  </TableRow>
                )
            )
          ) : (
            <TableRow>
              <TableCell className="font-medium">No Data Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default page;
