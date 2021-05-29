import type {Response} from "express";
import Request from "../../types/Request";
import {createHash} from "crypto";
import {User} from "../../models/User";
import jwt from "jsonwebtoken"


export default async  (req: Request, res: Response) => {
    const {username} = req.body
    let {password} = req.body

    password = createHash("sha256").update(password).digest("hex")

    const user = await User.findOne({username, password})
    if (!user) {
        res.send(403)
        return
    }

    const token = jwt.sign({username}, process.env.SECRET)

    res.json({token})
}