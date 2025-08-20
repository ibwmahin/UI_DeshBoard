import { Card, CardContent, Typography, Box, Button } from "@mui/material"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const RevenueChart = () => {
  const data = [
    { name: "16/08", value: 2.5 },
    { name: "17/08", value: 3.2 },
    { name: "18/08", value: 2.8 },
    { name: "19/08", value: 4.1 },
    { name: "20/08", value: 3.5 },
    { name: "21/08", value: 2.9 },
    { name: "22/08", value: 1.8 },
  ]

  return (
    <Card sx={{ height: "100%", borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Revenue Updates
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Overview of Profit
            </Typography>
          </Box>
          <Button variant="outlined" size="small">
            March 2025
          </Button>
        </Box>

        <Box sx={{ height: 300, mb: 3 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
              <Bar dataKey="value" fill="#5D87FF" radius={[4, 4, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Box>
            <Typography variant="h4" fontWeight={700} color="primary">
              $63,489.50
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Total Earnings
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#5D87FF" }} />
            <Typography variant="body2">Earnings this month</Typography>
          </Box>
          <Typography variant="body2" fontWeight={600}>
            $48,820
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "#49BEFF" }} />
            <Typography variant="body2">Expense this month</Typography>
          </Box>
          <Typography variant="body2" fontWeight={600}>
            $26,498
          </Typography>
        </Box>

        <Button variant="contained" fullWidth sx={{ mt: 3, borderRadius: 2 }}>
          View Full Report
        </Button>
      </CardContent>
    </Card>
  )
}

export default RevenueChart
