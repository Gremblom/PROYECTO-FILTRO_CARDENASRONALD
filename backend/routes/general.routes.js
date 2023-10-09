import {Router} from "express";

import {getAll, getOne, post, update, deleteDoc} from "../controllers/general.controller.js";

const router = Router();

router.get("/:coleccion/get", getAll);
router.get("/:coleccion/one/:id", getOne);
router.post("/:coleccion/new", post);
router.patch("/:coleccion/upd/:id", update);
router.delete("/:coleccion/del/:id", deleteDoc);

export default router;