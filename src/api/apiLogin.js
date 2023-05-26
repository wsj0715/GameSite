import { apiClient } from "./ApiClient";

export const Login = async () => {
    return await apiClient({
        method: "post",
        url: `/auth/login`
    })
} 