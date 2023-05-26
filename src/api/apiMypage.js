import { apiClient } from "./apiClient"

export const Mypage = async () => {
    return await apiClient({
        method: "post",
        url: `/mypage`
    })
}  