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

const TotalEarningChart = () => {
  const data = {
    labels: ["Total"],
    datasets: [
      {
        label: "Current Earnings",
        data: [78298],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, "#FF6F61");
          gradient.addColorStop(0.5, "#FF8A80");
          gradient.addColorStop(1, "#FFAB91");
          return gradient;
        },
        borderColor: "#FF6F61",
        borderWidth: 2,
        borderRadius: 10,
        barThickness: 50,
      },
      {
        label: "Previous Earnings",
        data: [65000],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, "#90CAF9");
          gradient.addColorStop(0.5, "#A3D8F4");
          gradient.addColorStop(1, "#B3E5FC");
          return gradient;
        },
        borderColor: "#90CAF9",
        borderWidth: 2,
        borderRadius: 10,
        barThickness: 50,
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
      legend: {
        display: true,
        position: "top",
        labels: {
          color: (context) =>
            context.chart.options.plugins.tooltip.darkMode
              ? "#D1D5DB"
              : "#374151",
          font: { size: 14, weight: "bold" },
          padding: 20,
        },
      },
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
            const label = tooltipItem.dataset.label || "";
            const value = tooltipItem.formattedValue || 0;
            return `${label}: $${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: (context) =>
            context.chart.options.plugins.tooltip.darkMode
              ? "rgba(209, 213, 219, 0.1)"
              : "rgba(55, 65, 81, 0.1)",
        },
        ticks: { display: false },
      },
      y: {
        grid: {
          display: true,
          color: (context) =>
            context.chart.options.plugins.tooltip.darkMode
              ? "rgba(209, 213, 219, 0.1)"
              : "rgba(55, 65, 81, 0.1)",
        },
        ticks: { display: false },
      },
    },
  };

  return (
    <div className="mt-5" style={{ height: "300px", width: "100%" }}>
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

export default TotalEarningChart;
