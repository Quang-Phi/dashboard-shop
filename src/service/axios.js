import { CONFIG } from "./utils";
import axios from "axios";

export const myAxios = axios.create({
    baseURL: CONFIG.API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})