import mongoose from "mongoose";

const FinanceSchema = new mongoose.Schema({
  income: {
    type: Number,
    required: true,
    min: 0,
  },
  savings: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  budget: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
});

export const Finance =
  mongoose.models.Finance || mongoose.model("Finance", FinanceSchema);
