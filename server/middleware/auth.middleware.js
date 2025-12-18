import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.userId = decoded.id;
    next();
  } catch {
    res.sendStatus(403);
  }
};
