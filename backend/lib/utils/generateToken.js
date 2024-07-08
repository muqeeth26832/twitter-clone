import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  console.log(token);
  return token;
  
};
