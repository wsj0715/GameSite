import { apiClient } from "./ApiClient";

export const getAllGames = async () => {
    return await apiClient({
        method: "get",
        url: `/`,
    });
};

export const getAGames = async (id) => {
    return await apiClient({
        method: "get",
        url: `/game/${id}`,
    });
};