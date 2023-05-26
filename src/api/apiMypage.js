import { apiClient } from "./ApiClient";

export const Mypage = async () => {
    return await apiClient({
        method: "post",
        url: `/mypage`
    })
}  