import {Router} from "express";
import { check } from "express-validator";
import multer from 'multer';
import {dirname, join} from "path";
import {fileURLToPath} from "url";

import {validateDocuments} from "../middlewares/validateDocuments.js";
import {saveImage} from "../middlewares/saveImages.js";
import {login, register}from "../controllers/login.controller.js";

const currentDir = dirname(fileURLToPath(import.meta.url));

const multerUpload = multer({
    dest : join(currentDir, '../uploads'),
    limits : { fieldSize : 5000000}
})

const router = Router();

router.post('/login',[
    check('correo','El email es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validateDocuments
],login);
router.post('/register',[
/*     check('Correo','El email es obligatorio').isEmail(),
    check('Password','La contraseña es obligatoria').not().isEmpty(), */
    check('Username','La username es obligatorio').not().isEmpty(), /* SANCHEZ SI NECESITA PROBAR EL REGISTER COMENTE ESTA LINEA Y DESCOMENTE SUS CHECKS*/
    multerUpload.single(('profileFoto'), saveImage),
    validateDocuments
],register);

export default router;


