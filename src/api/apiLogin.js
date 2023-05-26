import { apiClient } from "./apiClient"

export const Login = async () => {
    return await apiClient({
        method: "post",
        url: `/auth/login`
    })
} 