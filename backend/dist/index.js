"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./api"));
const mongoose_1 = require("mongoose");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("./models/User");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const io_1 = __importDefault(require("./io"));
const sockets_1 = __importDefault(require("./sockets"));
dotenv_1.config({ path: "../.env" });
mongoose_1.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to DB!");
});
const app = express_1.default();
const server = http_1.createServer(app);
const socketServer = new socket_io_1.Server(server);
app.use(body_parser_1.default.json());
app.use(async (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.replace("Bearer ", "");
        const { username } = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        req.user = await User_1.User.findOne({ username });
        req.user.password = null;
    }
    next();
});
app.use("/api", api_1.default);
app.use(express_1.default.static(__dirname + "/../../frontend/public"));
socketServer.on("connection", socket => {
    console.log("Client has connected");
    socket.on("authenticate", async (token) => {
        const { username } = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        socket.data.user = await User_1.User.findOne({ username });
        sockets_1.default.set(username, socket);
    });
    io_1.default(socket);
});
server.listen(8000, () => console.log("Listening on http://localhost:8000/"));
