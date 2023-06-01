import axios from "axios";
export const BACKEND_URL = "http://54.180.13.188:8080";
export const S3_URL = "https://gameproject-jpg-video.s3.ap-northeast-2.amazonaws.com/";

//netlify에서 배포한 상태일 경우(HTTPS) 백엔드(HTTP)에 요청하기 위해서는 CDN서버로 프록시 주어 리다이렉트 한 후 요청을 해야한다.
//때문에 api를 url에 붙여 _redirects 파일에서 설정한대로 리아다이렉트 되도록 한다.
const host = window.location.hostname === "localhost" ? BACKEND_URL : "/api";

export const apiClient = axios.create({
    baseURL: host,
});

apiClient.interceptors.request.use((config) => {
    const message = {
        uri: apiClient.getUri(config),
        time: Date.now(),
        config: config,
    };
    console.log(message);
    return config;
});

apiClient.interceptors.response.use(
    (response) => {
        const message = {
            time: Date.now(),
            status: response.status,
            data: response.data,
            headers: response.headers,
            logMessage: "RESPONSE RECEIVED",
        };
        console.log(message);
        return response;
    },
    (error) => {
        const customUuid = error.response && error.response.config && error.response.config.reqId ? error.response.config.reqId : "";

        const errorResponse = error.response
            ? error.response
            : {
                  status: null,
                  data: null,
                  headers: null,
              };
        const message = {
            reqId: customUuid,
            time: Date.now(),
            status: errorResponse.status,
            data: errorResponse.data,
            headers: errorResponse.headers,
            logMessage: error.message || "ERROR",
        };
        console.log(message);
        return Promise.reject(error);
    }
);

//https://velog.io/@jiheon788/Netlify%EC%97%90%EC%84%9C-HTTPS-HTTP-%ED%86%B5%EC%8B%A0-%ED%95%B4%EA%B2%B0-%EA%B3%BC%EC%A0%95
