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