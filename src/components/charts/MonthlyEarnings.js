import { Card, CardContent, Typography, Box, Avatar } from "@mui/material"
import { LineChart, Line, ResponsiveContainer } from "recharts"
import { TrendingUp, AttachMoney } from "@mui/icons-material"

const MonthlyEarnings = () => {
  const data = [{ value: 20 }, { value: 40 }, { value: 30 }, { value: 50 }, { value: 35 }, { value: 60 }, { value: 45 }]

  return (
    <Card sx={{ height: "100%", borderRadius: 3 }}>
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
          <Box>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Monthly Earnings
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
              $6,820
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "error.main" }}>
              <TrendingUp fontSize="small" />
              <Typography variant="body2" fontWeight={600}>
                +9% last year
              </Typography>
            </Box>
          </Box>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 40,
              height: 40,
            }}
          >
            <AttachMoney />
          </Avatar>
        </Box>

        <Box sx={{ height: 100, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#49BEFF"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#49BEFF" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  )
}

export default MonthlyEarnings
