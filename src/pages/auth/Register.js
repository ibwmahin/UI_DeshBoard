"use client"

import { useState } from "react"
import { Box, Card, CardContent, TextField, Button, Typography, Link, Divider } from "@mui/material"
import { motion } from "framer-motion"

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Register attempt:", formData)
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
                Create Account
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sign up to get started with Modernize
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", gap: 2 }}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
              </Box>

              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                required
              />

              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                margin="normal"
                required
              />

              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                margin="normal"
                required
              />

              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 3, mb: 2, borderRadius: 2 }}>
                Create Account
              </Button>
            </form>

            <Divider sx={{ my: 3 }}>or</Divider>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link href="/auth/login" fontWeight={600}>
                  Sign in
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  )
}

export default Register
