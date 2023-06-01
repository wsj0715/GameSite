import { apiClient } from "./apiClient";

export const getAllGames = async () => {
    return await apiClient({
        method: "get",
    });
};

export const getSearchGames = async (keyword) => {
    return await apiClient({
        method: "get",
        params: {
            name: keyword,
        },
    });
};

export const getAGames = async (id) => {
    return await apiClient({
        method: "get",
        url: `/game/${id}`,
    });
};
