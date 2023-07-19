import express from 'express';
import { registerNewUser, login } from "../controllers/usersControllers.js";

const router = express.Router();

router.post('/register', registerNewUser);
router.post('/login', login);

export default router;