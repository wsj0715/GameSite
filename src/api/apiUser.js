import { apiClient } from "./apiClient"
import qs from "qs";

export const Login = async (body) => {
    return await apiClient({
        method: "post",
        url: `/auth/login`,
        data: qs.stringify(body),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
    })
} 

export const Signin = async (body) => {
    return await apiClient({
        method: "post",
        url: `/auth/signup`,
        data: qs.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}  

export const Mypage = async () => {
    return await apiClient({
        method: "get",
        url: `/mypage`
    })
}  