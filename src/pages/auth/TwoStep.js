"use client"

import { useState } from "react"
import { Box, Card, CardContent, TextField, Button, Typography, Link } from "@mui/material"
import { motion } from "framer-motion"

const TwoStep = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""])

  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`)
        if (nextInput) nextInput.focus()
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Two-step verification code:", code.join(""))
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
                Two Step Verification
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We sent a verification code to your mobile. Enter the code from the mobile in the field below.
              </Typography>
            </Box>

            <form onSubmit={handleSubmit}>
              <Box sx={{ display: "flex", gap: 1, justifyContent: "center", mb: 3 }}>
                {code.map((digit, index) => (
                  <TextField
                    key={index}
                    id={`code-${index}`}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    inputProps={{
                      maxLength: 1,
                      style: { textAlign: "center", fontSize: "1.5rem" },
                    }}
                    sx={{ width: 50 }}
                  />
                ))}
              </Box>

              <Button type="submit" fullWidth variant="contained" size="large" sx={{ mt: 2, mb: 2, borderRadius: 2 }}>
                Verify My Account
              </Button>
            </form>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2">
                Didn't get the code?{" "}
                <Link href="#" fontWeight={600}>
                  Resend
                </Link>
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  )
}

export default TwoStep
