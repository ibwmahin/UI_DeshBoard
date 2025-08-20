import { Card, CardContent, Typography, Box } from "@mui/material"
import { BarChart, Bar, XAxis, ResponsiveContainer } from "recharts"

const EmployeeSalary = () => {
  const data = [
    { name: "Apr", salary: 20, profit: 15 },
    { name: "May", salary: 15, profit: 25 },
    { name: "June", salary: 35, profit: 20 },
    { name: "July", salary: 25, profit: 30 },
    { name: "Aug", salary: 20, profit: 15 },
    { name: "Sept", salary: 30, profit: 25 },
  ]

  return (
    <Card sx={{ height: "100%", borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Employee Salary
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Every month
        </Typography>

        <Box sx={{ height: 200, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
              <Bar dataKey="salary" fill="#E5E7EB" radius={[2, 2, 2, 2]} maxBarSize={20} />
              <Bar dataKey="profit" fill="#5D87FF" radius={[2, 2, 2, 2]} maxBarSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#E5E7EB" }} />
              <Typography variant="body2">Salary</Typography>
            </Box>
            <Typography variant="h6" fontWeight={600}>
              $36,358
            </Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#5D87FF" }} />
              <Typography variant="body2">Profit</Typography>
            </Box>
            <Typography variant="h6" fontWeight={600}>
              $5,296
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default EmployeeSalary
