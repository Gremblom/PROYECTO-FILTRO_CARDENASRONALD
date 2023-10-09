import {Router} from "express";

import {getAll, getOne} from "../controllers/general.controller.js";

const router = Router();

router.get("/:coleccion/get", getAll);
router.get("/:coleccion/one/:id", getOne);

export default router;