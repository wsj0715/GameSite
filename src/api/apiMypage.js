import { apiClient } from "./apiClient"

export const Mypage = async () => {
    return await apiClient({
        method: "get",
        url: `/mypage`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("token")}` 
        }
    })
} 