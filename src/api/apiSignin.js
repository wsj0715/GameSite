import { apiClient } from "./apiClient"

export const Signin = async () => {
    return await apiClient({
        method: "post",
        url: `/auth/signup`
    })
}  