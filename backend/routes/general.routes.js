import {Router} from "express";

import {getAll} from "../controllers/general.controller.js";

const router = Router();

router.get("/:coleccion/get", getAll);

export default router;