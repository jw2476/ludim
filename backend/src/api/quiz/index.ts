import {Router} from "express";
import subjects from "./subjects";
import bySubject from "./bySubject";

const router = Router()

router.get("/bySubject", bySubject)
router.get("/subjects", subjects)

export default router