"use client"
import { Card, CardContent, Typography, Box, Avatar } from "@mui/material"
import { motion } from "framer-motion"

const WidgetCard = ({ title, value, icon, color = "#5D87FF", trend, trendValue, subtitle }) => {
  return (
    <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <Card
        sx={{
          height: "100%",
          background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
          color: "white",
          borderRadius: 3,
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          cursor: "pointer",
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardContent sx={{ p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
            <Box>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                {value}
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.9 }}>
                {title}
              </Typography>
              {subtitle && (
                <Typography variant="caption" sx={{ opacity: 0.7 }}>
                  {subtitle}
                </Typography>
              )}
            </Box>
            <Avatar
              sx={{
                bgcolor: "rgba(255,255,255,0.2)",
                width: 48,
                height: 48,
              }}
            >
              {icon}
            </Avatar>
          </Box>

          {trend && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                {trend} {trendValue}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default WidgetCard
