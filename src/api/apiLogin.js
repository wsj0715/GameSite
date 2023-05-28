import { apiClient } from "./apiClient";

export const Login = async (data) => {
    return await apiClient({
        method: "post",
        url: `/auth/login`,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
    })
}