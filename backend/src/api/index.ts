import {Router} from "express";
import auth from "./auth";
import game from "./game";
import quiz from "./quiz";

const router = Router()

router.use("/auth", auth)
router.use("/game", game)
router.use("/quiz", quiz)

export default router