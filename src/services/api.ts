import axios from "axios"; // importa a biblioteca para consumir a api

export const api = axios.create({
    baseURL: "http://192.168.15.8:3333",
    timeout: 700
})