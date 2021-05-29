import axios from "axios";
import {token as t} from "./stores";

let token;

t.subscribe(t => {
    token = t
})

export default axios.create({
    headers: token ? {"Authorization": `Bearer ${token}`} : {}
})