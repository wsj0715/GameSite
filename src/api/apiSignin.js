import { apiClient } from "./apiClient";

export const Signin = async (data) => {
    return await apiClient({
        method: "post",
        url: `/auth/signup`, 
        data: data
    })
} 