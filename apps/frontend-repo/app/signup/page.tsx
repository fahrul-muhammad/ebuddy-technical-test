"use client";

import { Box, Button, Container, Link, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSignUpUser } from "../../store";
import { RegisterUser, SignUpState } from "../../store/slices/signupUser";

export default function RegisterPage() {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const registerData: SignUpState = useSelector(selectSignUpUser);

  useEffect(() => {
    if (registerData.isSuccess) {
      return router.replace("/");
    }
  }, [registerData.isSuccess]);

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
            <TextField label="Full Name" type="full name" fullWidth variant="outlined" margin="normal" placeholder="your full name" onChange={(e) => setFullName(e.target.value)} />
            <TextField label="Email" type="email" fullWidth variant="outlined" margin="normal" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth variant="outlined" margin="normal" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
            {registerData.error !== null ? (
              <Typography color="error" variant="body2">
                {registerData.error}
              </Typography>
            ) : null}

            <Button
              fullWidth
              onClick={() => dispatch(RegisterUser({ email, password, fullName }))}
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
