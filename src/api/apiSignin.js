import { apiClient } from "./apiClient"
import qs from "qs";

export const Signin = async (body) => {
    return await apiClient({
        method: "post",
        url: `/auth/signup`,
        data: qs.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        },
    })
}  