import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ProjectsChart = () => {
  const data = [
    { name: "Jan", projects: 12 },
    { name: "Feb", projects: 8 },
    { name: "Mar", projects: 14 },
    { name: "Apr", projects: 10 },
    { name: "May", projects: 16 },
    { name: "Jun", projects: 12 },
    { name: "Jul", projects: 14 },
    { name: "Aug", projects: 10 },
  ];

  return (
    <LineChart width={190} height={100} data={data} className="dark:text-white">
      <XAxis
        dataKey="name"
        stroke="currentColor"
        axisLine={false}
        tickLine={false}
      />
      <YAxis hide type="number" domain={[0, "dataMax + 2"]} />
      <CartesianGrid stroke="currentColor" strokeDasharray="5 5" />
      <Tooltip
        contentStyle={{
          background: "rgba(0, 0, 0, 0.8)",
          borderRadius: 8,
          padding: 8,
        }}
        itemStyle={{ color: "white" }}
      />
      <Line
        type="monotone"
        dataKey="projects"
        stroke="currentColor"
        strokeWidth={3}
        dot={false}
      />
    </LineChart>
  );
};

export default ProjectsChart;
