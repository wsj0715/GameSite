import axios from "axios";
export const BACKEND_URL = "http://54.180.13.188:8080";
export const S3_URL = "https://gameproject-jpg-video.s3.ap-northeast-2.amazonaws.com/";
const host = window.location.hostname === "localhost" ? BACKEND_URL : "api";

export const apiClient = axios.create({
    baseURL: host,
});
