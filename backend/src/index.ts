import {config} from 'dotenv'
import type {Response} from "express";
import express from 'express'
import Request from "./types/Request";
import bodyParser from "body-parser";
import api from './api';
import {connect} from "mongoose";
import jwt from 'jsonwebtoken'
import {User} from "./models/User";
import {createServer} from "http";
import {Server} from "socket.io"
import io from './io';
import sockets from "./sockets";

config({path: "../.env"})


connect(process.env.MONGO_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Connected to DB!")
})

const app = express()
const server = createServer(app)
const socketServer = new Server(server)

app.use(bodyParser.json())
app.use(async (req: Request, res: Response, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.replace("Bearer ", "")
        const {username} = jwt.verify(token, process.env.SECRET) as any
        req.user = await User.findOne({username})
        req.user.password = null
    }
    next()
})
app.use("/api", api)
app.use(express.static(__dirname + "/../../frontend/public"))

socketServer.on("connection", socket => {
    console.log("Client has connected")

    socket.on("authenticate", async token => {
        const {username} = jwt.verify(token, process.env.SECRET) as any
        socket.data.user = await User.findOne({username})
        sockets.set(username, socket)
    })

    io(socket)
})

server.listen(8000, () => console.log("Listening on http://localhost:8000/"))