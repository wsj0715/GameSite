import { apiClient } from "./apiClient";

<<<<<<< HEAD
export const Login = async (data) => {
=======
export const login = async (data) => {
>>>>>>> e15031f9a085cc03e7bed15db7485caf9295abc3
    return await apiClient({
        method: "post",
        url: `/auth/login`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
<<<<<<< HEAD
        withCredentials: true,
=======
>>>>>>> e15031f9a085cc03e7bed15db7485caf9295abc3
    });
};
