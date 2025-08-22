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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RevenueUpdatesChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Footware Revenue",
        data: [2.5, 3.0, 2.0, 2.5, 1.5],
        borderColor: "#64B5F6",
        backgroundColor: "rgba(100, 181, 246, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
      {
        label: "Fashionware Revenue",
        data: [-1.5, -1.0, -1.5, -1.0, -0.5],
        borderColor: "#90CAF9",
        backgroundColor: "rgba(144, 202, 249, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
        backgroundColor: (context) => {
          return context.chart.options.plugins.tooltip.darkMode
            ? "#252A3B"
            : "#fff";
        },
        titleFont: {
          size: 14,
          color: (context) => {
            return context.chart.options.plugins.tooltip.darkMode
              ? "#fff"
              : "#000";
          },
        },
        bodyFont: {
          size: 14,
          color: (context) => {
            return context.chart.options.plugins.tooltip.darkMode
              ? "#fff"
              : "#000";
          },
        },
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.formattedValue || 0;
            return `${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: (context) => {
            return context.chart.options.plugins.tooltip.darkMode
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(0, 0, 0, 0.12)";
          },
        },
        ticks: { display: false },
      },
      y: {
        grid: {
          color: (context) => {
            return context.chart.options.plugins.tooltip.darkMode
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(0, 0, 0, 0.12)";
          },
        },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="p-10" style={{ height: "320px", width: "100%" }}>
      <Line
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

export default RevenueUpdatesChart;
