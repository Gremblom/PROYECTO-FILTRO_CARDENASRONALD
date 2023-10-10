import {Router} from "express";
import { check } from "express-validator";

import {validateDocuments} from "../middlewares/validateDocuments.js";
import {login, register}from "../controllers/login.controller.js";


const router = Router();

router.post('/login',[
    check('correo','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
],login);


router.post('/register',register)

export default router;


