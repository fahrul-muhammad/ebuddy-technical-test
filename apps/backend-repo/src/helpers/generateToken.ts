import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
export function generateToken(email: string) {
  const payload = {
    title: "ebuddy-technical-test",
    email,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
  return token;
}
