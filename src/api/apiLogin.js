import { apiClient } from "./ApiClient";

export const Login = async () => {
    return await apiClient({
        method: "post",
        url: `/auth/login`
    })
}

export const Signin = async () => {
    return await apiClient({
        method: "post",
        url: `/auth/signup`
    })
}

export const Mypage = async () => {
    return await apiClient({
        method: "post",
        url: `/mypage`
    })
}