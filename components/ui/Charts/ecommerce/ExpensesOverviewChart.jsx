import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ExpensesOverviewChart = () => {
  const data = {
    labels: ["Expenses"],
    datasets: [
      {
        label: "Current Expenses",
        data: [4500],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 150);
          gradient.addColorStop(0, "#EF5350");
          gradient.addColorStop(0.5, "#F06292");
          gradient.addColorStop(1, "#F48FB1");
          return gradient;
        },
        borderColor: "#EF5350",
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 30,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 2000,
      easing: "easeInOutQuad",
    },
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: (context) =>
          context.chart.options.plugins.tooltip.darkMode
            ? "#1E293B"
            : "#F9FAFB",
        titleFont: { size: 16, weight: "bold", color: "#fff" },
        bodyFont: { size: 14, color: "#fff" },
        borderColor: "#4B5563",
        borderWidth: 1,
        padding: 12,
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.formattedValue || 0;
            return `$${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: { grid: { display: false }, ticks: { display: false } },
      y: { grid: { display: false }, ticks: { display: false } },
    },
  };

  return (
    <div
      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-4 shadow-lg dark:shadow-gray-700/50"
      style={{ height: "150px", width: "100%" }}
    >
      <Bar
        data={data}
        options={{
          ...options,
          plugins: {
            tooltip: {
              ...options.plugins.tooltip,
              darkMode: true,
            },
          },
        }}
      />
    </div>
  );
};

export default ExpensesOverviewChart;
