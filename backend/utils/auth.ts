import jwt from "jsonwebtoken";
const { sign, verify } = jwt;

const KEY = process.env.JWT_KEY;

export function createJSONToken(username) {
  return sign({ username }, KEY, { expiresIn: "1h" });
}

export function validateJSONToken(token) {
  if (token) {
    return verify(token, KEY);
  }
  return false;
}
