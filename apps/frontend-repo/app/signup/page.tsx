"use client";

import { Box, Button, Container, Link, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Sign Up
          </Typography>

          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            <TextField label="Full Name" type="full name" fullWidth variant="outlined" margin="normal" placeholder="your full name" />
            <TextField label="Email" type="email" fullWidth variant="outlined" margin="normal" placeholder="joe@email.com" />
            <TextField label="Password" type="password" fullWidth variant="outlined" margin="normal" placeholder="Enter your Password" />

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "red",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#cc0000",
                },
              }}
            >
              Sign Up
            </Button>

            <Typography variant="body2">
              Already have an account?{" "}
              <Link href="/" underline="hover" fontWeight="bold">
                Login here.
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
