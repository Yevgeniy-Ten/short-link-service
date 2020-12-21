import axios from "axios"

export const serverURL = "http://localhost:3003"
export const request = axios.create({
    baseURL: serverURL
})