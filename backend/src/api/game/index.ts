import {Router} from "express";
import create from "./create";
import join from "./join";

const router = Router()

router.post("/", create)
router.post("/join", join)

export default router