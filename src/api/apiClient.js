import axios from "axios";
export const BACKEND_URL = "http://54.180.13.188:8080";

const host = window.location.hostname === "localhost" ? BACKEND_URL : "api";

export const apiClient = axios.create({
    baseURL: host,
});
