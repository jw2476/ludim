import {writable} from "svelte/store";
import type {IQuiz} from "./common/types/Quiz";
import io from "socket.io-client"
import type {IGame} from "./common/types/Game";

export const page = writable<string>("home")
export const token = writable<string>(localStorage.getItem("token"))
export const quiz = writable<IQuiz>(null)
export const game = writable<IGame>(null)
export const socket = io()

token.subscribe(t => {
    if (t) {
        socket.emit("authenticate", t)
    }
})

socket.on("game over", () => page.set("home"))


token.subscribe(t => localStorage.setItem("token", t))