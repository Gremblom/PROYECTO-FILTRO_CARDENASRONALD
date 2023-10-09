import {Router} from "express";

import {getAll, getOne, post} from "../controllers/general.controller.js";

const router = Router();

router.get("/:coleccion/get", getAll);
router.get("/:coleccion/one/:id", getOne);
router.post("/:coleccion/new", post);

export default router;