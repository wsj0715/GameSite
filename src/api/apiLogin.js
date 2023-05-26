import { apiClient } from "./apiClient"

export const Login = async (postReq) => {
    return await apiClient({
        method: "post",
        url: `/auth/login`,
        data: {
            username: postReq.username,
            password: postReq.password,
        },
    })
} 