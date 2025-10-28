import express from "express";
import { userControllers } from "../controllers/userControllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          example: 1
 *        email:
 *          type: string
 *          example: magenta@gmail.com
 *        name:
 *          type: string
 *          example: magenta
 */

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener todos los usuarios
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: OK
 *
 */
router.get("/", userControllers.getUsers);

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear nuevo usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: magenta@gmail.com
 *              name:
 *                type: string
 *                example: magenta
 *    responses:
 *      201:
 *        description: Usuario creado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      500:
 *        description: Error del servidor
 *
 */
router.post("/", userControllers.createUser);

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Actualizar usuario existente
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID del usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *                example: magenta@gmail.com
 *              name:
 *                type: string
 *                example: magenta
 *    responses:
 *      200:
 *        description: Usuario actualizado correctamente
 *        content:
 *          application/json:
 *            $ref: '#/components/schemas/User'
 *      400:
 *        description: Datos invalidos
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Error del servidor
 *
 */
router.put("/:id", userControllers.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *    summary: Eliminar usuario
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID del usuario
 *    responses:
 *      200:
 *        description: Usuario eliminado correctamente
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Error del servidor
 *
 */
router.delete("/:id", userControllers.deleteUser);

export default router;
