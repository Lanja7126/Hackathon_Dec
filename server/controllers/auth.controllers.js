import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../config/db.js";

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  await db.query(
    "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
    [name, email, hashed]
  );

  res.json({ message: "Utilisateur créé" });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const [users] = await db.query(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (!users.length)
    return res.status(401).json({ message: "Email incorrect" });

  const user = users[0];

  const valid = await bcrypt.compare(password, user.password);
  if (!valid)
    return res.status(401).json({ message: "Mot de passe incorrect" });

  const token = jwt.sign(
    { id: user.id },
    "SECRET_KEY",
    { expiresIn: "7d" }
  );

  res.json({
    token,
    user: { id: user.id, name: user.name }
  });
};
