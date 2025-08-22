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

const WeeklyStats = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weekly Revenue",
        data: [1200, 1500, 1300, 1700, 1600, 1400, 1800],
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "#4A90E2");
          gradient.addColorStop(0.5, "#63B3ED");
          gradient.addColorStop(1, "#82CFFD");
          return gradient;
        },
        borderColor: "#4A90E2",
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 20,
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
      x: {
        grid: {
          display: true,
          color: (context) =>
            context.chart.options.plugins.tooltip.darkMode
              ? "rgba(209, 213, 219, 0.1)"
              : "rgba(55, 65, 81, 0.1)",
        },
        ticks: {
          color: (context) =>
            context.chart.options.plugins.tooltip.darkMode
              ? "#D1D5DB"
              : "#374151",
        },
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
    <div className="" style={{ height: "250px", width: "100%" }}>
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

export default WeeklyStats;
