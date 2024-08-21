"use client";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useToast } from "@/components/ui/use-toast";

const FinanceForm = () => {
  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState(0);
  const { toast } = useToast();

  const numericSavings = income - budget;

  useEffect(() => {
    const fetchFinanceDetails = async () => {
      const response = await axios.get("/api/v1/finance");
      setIncome(response.data.finance[0]?.income || 0);
      setBudget(response.data.finance[0]?.budget || 0);
    };
    fetchFinanceDetails();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/finance", {
        income: income,
        budget: budget,
      });

      if (response.status === 200) {
        toast({
          title: "Financial Details Saved",
        });
      }
    } catch (error: any) {
      console.error(error);
      if (error.response && error.response.status === 400) {
        toast({
          title: "Validation Error.",
          description: "Savings Can't be Negative!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error.",
          description: "An unexpected error",
          variant: "destructive",
        });
      }
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
          onChange={(e) => setIncome(e.target.valueAsNumber)}
          required
        />
        <Label>Budget</Label>
        <Input
          value={budget}
          type="number"
          onChange={(e) => setBudget(e.target.valueAsNumber)}
          required
        />
        <Label>Savings</Label>
        <h1>{numericSavings || 0}</h1>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

export default FinanceForm;
