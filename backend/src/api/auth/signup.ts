import type {Response} from "express";
import Request from "../../types/Request";
import {User} from "../../models/User";
import {createHash} from "crypto";
import jwt from 'jsonwebtoken'

export default async (req: Request, res: Response) => {
    const username = req.body.username
    let password = req.body.password

    const existing = await User.findOne({username})
    if (existing) {
        res.send(403)
        return
    }

    password = createHash("sha256").update(password).digest("hex") // Hash Password

    await new User({
        username,
        password
    }).save()

    const token = jwt.sign({username}, process.env.SECRET)

    res.json({token})
}
