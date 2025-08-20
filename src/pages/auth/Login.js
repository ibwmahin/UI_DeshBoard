"use client"

import { useState } from "react"
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Link,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material"
import { motion } from "framer-motion"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const handleChange = (e) => {
    const { name, value, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt:", formData)
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
                Welcome Back
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sign in to your account to continue
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
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

              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", my: 2 }}>
                <FormControlLabel
                  control={<Checkbox name="remember" checked={formData.remember} onChange={handleChange} />}
                  label="Remember me"
                />
                <Link href="/auth/forgot-password" variant="body2">
                  Forgot Password?
                </Link>
              </Box>

              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 2, mb: 2, borderRadius: 2 }}>
                Sign In
              </Button>
            </form>

            <Divider sx={{ my: 3 }}>or</Divider>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2">
                Don't have an account?{" "}
                <Link href="/auth/register" fontWeight={600}>
                  Sign up
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  )
}

export default Login
