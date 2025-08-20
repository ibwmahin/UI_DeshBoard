import { Card, CardContent, Typography, Box } from "@mui/material"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { TrendingUp } from "@mui/icons-material"

const YearlyBreakup = () => {
  const data = [
    { name: "2025", value: 65 },
    { name: "2024", value: 35 },
  ]

  const COLORS = ["#5D87FF", "#E5E7EB"]

  return (
    <Card sx={{ height: "100%", borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight={600} gutterBottom>
          Yearly Breakup
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography variant="h4" fontWeight={700} sx={{ mr: 2 }}>
            $36,358
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "success.main" }}>
            <TrendingUp fontSize="small" />
            <Typography variant="body2" fontWeight={600}>
              +9% last year
            </Typography>
          </Box>
        </Box>

        <Box sx={{ height: 200, position: "relative" }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#5D87FF" }} />
            <Typography variant="body2">2025</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#E5E7EB" }} />
            <Typography variant="body2">2024</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default YearlyBreakup
