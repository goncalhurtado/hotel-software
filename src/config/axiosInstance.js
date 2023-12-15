import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/api/v1"
})

axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});