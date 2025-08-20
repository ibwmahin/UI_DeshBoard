"use client"
import { Box, Typography, Grid, Card, CardContent } from "@mui/material"
import { motion } from "framer-motion"

const UIComponents = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" fontWeight={700} gutterBottom>
          UI Components
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Explore our comprehensive collection of UI components and elements.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Buttons
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Various button styles and states for different use cases.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Forms
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Input fields, selects, checkboxes, and form validation components.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Cards
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Flexible content containers with various layouts and styles.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default UIComponents
