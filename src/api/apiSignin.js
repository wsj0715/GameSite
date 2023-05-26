import { apiClient } from "./ApiClient";

export const Signin = async () => {
    return await apiClient({
        method: "post",
        url: `/auth/signup`
    })
}