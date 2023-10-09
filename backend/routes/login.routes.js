import {Router} from "express";
import {login,register }from "../controllers/login.controller.js";
import { check } from "express-validator";
import { validateDocuments } from "../middlewares/validateDocuments.js";

const router = Router();

router.post('/login',[
    check('correo','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
],login);
router.post('/register',[
    check('Correo','El email es obligatorio').isEmail(),
    check('Password','La contraseña es obligatoria').not().isEmpty(),
    check('Username','La username es obligatorio').not().isEmpty(),
    validateDocuments
],register);

export default router;


