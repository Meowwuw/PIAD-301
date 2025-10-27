import { sendEmail } from "../services/emailService.js";

export const registerUser = async (req, res) => {
  const { email, name } = req.body; 
  await sendEmail(
    email,
    "Bienvenido",
    `Hola ${name}, bienvenido a nuestra app`
  );
  res.json({ message: "Usuario creado, email enviado" });
};
