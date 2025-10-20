import express from 'express';
import { userController } from '../controllers/userController';

const router = express.Router();

//Rutas para llamar al usuario
router.get('/',userController.getUsers);
router.post('/',userController,createUser);

export default router;
