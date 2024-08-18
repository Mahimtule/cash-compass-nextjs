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
import ExpenseModel from "@/components/utils/ExpenseModel";
import axios from "axios";
import { useEffect, useState } from "react";
import { Trash, Pen } from "lucide-react";
import EditModal from "@/components/utils/EditModal";

interface ExpensesProps {
  _id: string;
  itemName: string;
  amount: number;
  category: string;
  priority: string;
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

  const onCreate = (newExpense: ExpensesProps) => {
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
  };

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
    <section className="w-full">
      <div className="mb-3 flex justify-between items-center">
        <h1 className="text-lg font-medium">Expense</h1>
        <ExpenseModel onCreate={onCreate} />
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
            expenses.map((expense) => (
              <TableRow key={expense._id}>
                <TableCell>{expense.itemName}</TableCell>
                <TableCell>₹{expense.amount}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell
                  className={`font-medium ${
                    expense.priority === "low"
                      ? "text-green-500"
                      : expense.priority === "mid"
                      ? "text-yellow-400"
                      : "text-red-600"
                  }`}
                >
                  {expense.priority}
                </TableCell>
                <TableCell>
                  {new Date(expense.createdAt).toLocaleDateString()}
                </TableCell>
                <TableCell className="flex justify-center items-center gap-2">
                  <Button size="icon" onClick={() => handleDelete(expense._id)}>
                    <Trash width={16} height={16} />{" "}
                  </Button>
                  <EditModal onCreate={() => {}} />
                </TableCell>
              </TableRow>
            ))
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
