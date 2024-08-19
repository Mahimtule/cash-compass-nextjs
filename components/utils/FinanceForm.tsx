"use client";
import axios from "axios";
import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FinanceForm = () => {
  const [income, setIncome] = useState("");
  const [budget, setBudget] = useState("");

  const numaricIncome = parseInt(income);
  const numaricBudget = parseInt(budget);
  const numaricSavings = numaricIncome - numaricBudget;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/finance", {
        income: numaricIncome,
        budget: numaricBudget,
      });
      setIncome("");
      setBudget("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="p-5 bg-white rounded-lg">
      <h1 className="text-lg font-medium mb-2">Finance Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Label>Income</Label>
        <Input
          value={income}
          type="number"
          onChange={(e) => setIncome(e.target.value)}
          required
        />
        <Label>Budget</Label>
        <Input
          value={budget}
          type="number"
          onChange={(e) => setBudget(e.target.value)}
          required
        />
        <Label>Savings</Label>
        <h1>{numaricSavings || "0"}</h1>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default FinanceForm;
