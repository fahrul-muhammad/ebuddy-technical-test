"use client";

import { Box, Button, Container, Link, Paper, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthUser } from "../store";
import { LoginState, LoginUser } from "../store/slices/loginUser";
export default function LoginPage() {
  const dispatch: any = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const authData: LoginState = useSelector(selectAuthUser);

  useEffect(() => {
    if (authData.isSuccess) {
      return router.push("/dashboard");
    }
  }, [authData.isSuccess]);
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
            <TextField label="Email" type="email" fullWidth variant="outlined" margin="normal" placeholder="joe@email.com" onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth variant="outlined" margin="normal" placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
            {authData.error !== null ? (
              <Typography color="error" variant="body2">
                {authData.error}
              </Typography>
            ) : null}
            <Box textAlign="right" mt={1}>
              <Link href="#" underline="hover" variant="body2">
                forgot password?
              </Link>
            </Box>

            <Button
              onClick={() => {
                dispatch(LoginUser({ email, password }));
              }}
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
              {authData.isLoading ? "Loading..." : "Login"}
            </Button>

            <Typography variant="body2">
              Don't have an account?{" "}
              <Link href="/signup" underline="hover" fontWeight="bold">
                Register here.
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
