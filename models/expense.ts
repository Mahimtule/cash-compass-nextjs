import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
  },
  category: {
    type: String,
    enum: ["personal", "work", "home", "other"],
  },
  priority: {
    type: String,
    enum: ["low", "mid", "high"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Expense =
  mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);
