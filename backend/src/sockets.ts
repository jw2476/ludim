import {Socket} from "socket.io";

const sockets = new Map<string, Socket>()

export default sockets