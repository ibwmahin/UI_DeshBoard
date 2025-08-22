import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MonthlyEarningsChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "Earnings",
        data: [5000, 5500, 6000, 6200, 6500, 6800, 6700, 6820],
        borderColor: "#4A90E2",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(163, 191, 250, 0.5)");
          gradient.addColorStop(1, "rgba(163, 191, 250, 0)");
          return gradient;
        },
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Monthly Earnings",
        font: {
          size: 16,
          weight: "bold",
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: "#1E293B",
        titleFont: { size: 14, color: "#fff" },
        bodyFont: { size: 14, color: "#fff" },
        borderColor: "#4B5563",
        borderWidth: 1,
        padding: 8,
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
    <div className="">
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold text-gray-800 dark:text-white">
          $6,820
        </span>
        <span className="ml-2 flex items-center bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 text-xs font-medium px-2 py-1 rounded-full shadow">
          +9% vs last month
        </span>
      </div>
      <div style={{ height: "150px", width: "100%" }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyEarningsChart;
