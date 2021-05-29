import {Socket} from "socket.io";
import disconnect from "./disconnect";

export default (socket: Socket) => {
    disconnect(socket)
}