import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const SalesOverviewChart = () => {
  const data = {
    labels: ["Profit", "Expanse"],
    datasets: [
      {
        data: [500458, 23450],
        backgroundColor: ["#4A90E2", "#A3BFFA"],
        borderColor: ["#fff", "#fff"],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { callbacks: { label: (context) => `$${context.raw}` } },
    },
    cutout: "85%",
  };

  return (
    <div className="relative">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800 dark:text-white">
        $500,458
      </div>
    </div>
  );
};

export default SalesOverviewChart;
