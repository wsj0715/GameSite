import { apiClient } from "./apiClient"
import qs from "qs";

export const Login = async (postReq) => {
    const data = qs.stringify({
        username: postReq.username,
        password: postReq.password
    })

    return await apiClient({
        method: "post",
        url: `/auth/login`,
        data: data
    })
} 