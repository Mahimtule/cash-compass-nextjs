import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
    default: 0,
  },
  category: {
    type: String,
    enum: ["personal", "work", "home", "other"],
    required: true,
    default: "personal",
  },
  priority: {
    type: String,
    enum: ["low", "mid", "high"],
    required: true,
    default: "mid",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Expense =
  mongoose.models.Expense || mongoose.model("Expense", ExpenseSchema);
