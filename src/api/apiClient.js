import axios from "axios";
export const BACKEND_URL = "http://54.180.13.188:8080";

//netlify에서 배포한 상태일 경우(HTTPS) 백엔드(HTTP)에 요청하기 위해서는 CDN서버로 프록시 주어 리다이렉트 한 후 요청을 해야한다.
//때문에 api를 url에 붙여 _redirects 파일에서 설정한대로 리아다이렉트 되도록 한다.
const host = window.location.hostname === "localhost" ? BACKEND_URL : "api";

export const apiClient = axios.create({
    baseURL: host,
});

//https://velog.io/@jiheon788/Netlify%EC%97%90%EC%84%9C-HTTPS-HTTP-%ED%86%B5%EC%8B%A0-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95