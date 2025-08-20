"use client"

import { useState } from "react"
import { Box, Card, CardContent, TextField, Button, Typography, Link } from "@mui/material"
import { motion } from "framer-motion"

const ForgotPassword = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Password reset for:", email)
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        p: 2,
      }}
    >
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Card sx={{ maxWidth: 400, width: "100%", borderRadius: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Forgot Password?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enter your email address and we'll send you a link to reset your password.
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
              />

              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2, borderRadius: 2 }}>
                Send Reset Link
              </Button>
            </form>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2">
                Remember your password?{" "}
                <Link href="/auth/login" fontWeight={600}>
                  Back to Login
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  )
}

export default ForgotPassword
