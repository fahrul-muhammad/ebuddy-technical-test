"use client";

import { Box, Button, Container, Link, Paper, TextField, Typography } from "@mui/material";

export default function LoginPage() {
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
            Log in
          </Typography>

          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            <TextField label="Email" type="email" fullWidth variant="outlined" margin="normal" placeholder="joe@email.com" />
            <TextField label="Password" type="password" fullWidth variant="outlined" margin="normal" placeholder="Enter your Password" />

            <Box textAlign="right" mt={1}>
              <Link href="#" underline="hover" variant="body2">
                forgot password?
              </Link>
            </Box>

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
              Login
            </Button>

            <Typography variant="body2">
              Don't have an account?{" "}
              <Link href="#" underline="hover" fontWeight="bold">
                Register here.
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
