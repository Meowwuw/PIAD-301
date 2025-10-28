import { transporter } from "../config/emailConfig.js";

export const sendEmail = async (to, subject, text) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });
    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};
