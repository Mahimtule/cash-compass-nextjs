"use client";

import ExpenseBarChart from "@/components/utils/ExpenseBarChart";
import FinanceForm from "@/components/utils/FinanceForm";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
  const itemNames = expenses.map((expense) => expense.itemName);
  const amounts = expenses.map((expense) => expense.amount);

  return (
    <main>
      <div className="w-full h-full">
        <h1 className="text-lg font-medium">Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-[70%]">
            <ExpenseBarChart itemName={itemNames} amount={amounts} />
          </div>
          <div className="w-full md:w-[30%]">
            <FinanceForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
