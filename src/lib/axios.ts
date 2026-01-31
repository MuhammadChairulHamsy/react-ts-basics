import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
})

export const axiosJsonPlaceholder = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})