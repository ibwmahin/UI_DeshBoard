"use client"
import { Grid, Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { People, Business, Assignment, Event, AccountBalance, Assessment } from "@mui/icons-material"

// Components
import WidgetCard from "../components/WidgetCard"
import RevenueChart from "../components/charts/RevenueChart"
import YearlyBreakup from "../components/charts/YearlyBreakup"
import MonthlyEarnings from "../components/charts/MonthlyEarnings"
import EmployeeSalary from "../components/charts/EmployeeSalary"

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Welcome back! Here's what's happening with your business today.
        </Typography>
      </Box>

      {/* Summary Cards */}
      <motion.div variants={itemVariants}>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={2}>
            <WidgetCard title="Employees" value="96" icon={<People />} color="#6366F1" />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <WidgetCard title="Clients" value="3,650" icon={<Business />} color="#F59E0B" />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <WidgetCard title="Projects" value="356" icon={<Assignment />} color="#06B6D4" />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <WidgetCard title="Events" value="696" icon={<Event />} color="#EF4444" />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <WidgetCard title="Payroll" value="$96k" icon={<AccountBalance />} color="#10B981" />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <WidgetCard title="Reports" value="59" icon={<Assessment />} color="#3B82F6" />
          </Grid>
        </Grid>
      </motion.div>

      {/* Charts Row 1 */}
      <motion.div variants={itemVariants}>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} lg={8}>
            <RevenueChart />
          </Grid>
          <Grid item xs={12} lg={4}>
            <YearlyBreakup />
          </Grid>
        </Grid>
      </motion.div>

      {/* Charts Row 2 */}
      <motion.div variants={itemVariants}>
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={6} lg={3}>
            <EmployeeSalary />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <WidgetCard title="Customers" value="36,358" icon="📈" color="#2A3447" trend="↗" trendValue="+9%" />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <WidgetCard title="Projects" value="78,298" icon="📊" color="#2A3447" trend="↗" trendValue="+9%" />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MonthlyEarnings />
          </Grid>
        </Grid>
      </motion.div>

      {/* Best Selling Products Card */}
      <motion.div variants={itemVariants}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Box
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: 3,
                p: 3,
                color: "white",
                height: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Best selling products
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Overview 2025
                </Typography>
              </Box>

              <Box sx={{ textAlign: "center", my: 2 }}>
                <img
                  src="/placeholder.svg?height=120&width=200"
                  alt="Dashboard illustration"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>

              <Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body2">MaterialPro</Typography>
                    <Typography variant="body2">55%</Typography>
                  </Box>
                  <Box sx={{ height: 4, bgcolor: "rgba(255,255,255,0.3)", borderRadius: 2 }}>
                    <Box sx={{ width: "55%", height: "100%", bgcolor: "white", borderRadius: 2 }} />
                  </Box>
                </Box>

                <Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body2">Flexy Admin</Typography>
                    <Typography variant="body2">20%</Typography>
                  </Box>
                  <Box sx={{ height: 4, bgcolor: "rgba(255,255,255,0.3)", borderRadius: 2 }}>
                    <Box sx={{ width: "20%", height: "100%", bgcolor: "white", borderRadius: 2 }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </motion.div>
    </motion.div>
  )
}

export default Dashboard
