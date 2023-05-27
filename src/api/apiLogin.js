import { apiClient } from "./apiClient"

export const Login = async (body) => {
    return await apiClient({
        method: "post",
        url: `/auth/login`,
        data: body
    })
} 