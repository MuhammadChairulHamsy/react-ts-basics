import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3001",
})

// export const axiosJsonPlaceholder = axios.create({
//     baseURL: "https://jsonplaceholder.typicode.com"
// })