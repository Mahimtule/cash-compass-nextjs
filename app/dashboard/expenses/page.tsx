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

interface ExpensesProps {
  id: string;
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
        console.log(error);
      }
    };
    fetchAllData();
  }, []);

  return (
    <section className="w-full">
      <div className="mb-3 flex justify-between items-center">
        <h1 className="text-lg font-medium">Expense</h1>
        <Button>Add</Button>
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
              <TableRow key={expense.id}>
                <TableCell>{expense.itemName}</TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>{expense.category}</TableCell>
                <TableCell>{expense.priority}</TableCell>
                <TableCell>
                  {new Date(expense.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>No Data Found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default page;
