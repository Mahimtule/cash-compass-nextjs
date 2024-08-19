"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartOptions } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface BarChartProps {
  itemName: string[];
  amount: number[];
}

const ExpenseBarChart = ({ itemName, amount }: BarChartProps) => {
  const data = {
    labels: itemName,
    datasets: [
      {
        label: "All Expenses",
        data: amount,
        backgroundColor: "rgba(22,163,74, 0.5)",
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `Expenses: $${tooltipItem.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Item Name",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-5 bg-white rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseBarChart;
