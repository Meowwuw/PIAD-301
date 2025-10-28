import express from "express";
import { registerUser } from "../controllers/emailControllers.js";

const router = express.Router();

/**
 * @swagger
 * /api/email/register:
 *  post:
 *    summary: Registrar usuario y enviar email de bienvenida
 *    tags: [Email]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: usuario@gmail.com
 *              name:
 *                type: string
 *                example: Juan Pérez
 *    responses:
 *      200:
 *        description: Email enviado correctamente
 *      500:
 *        description: Error al enviar email
 */
router.post("/register", registerUser);

export default router;
