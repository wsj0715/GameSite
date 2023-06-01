import { apiClient } from "./apiClient";

export const getAllGames = async () => {
    // return await apiClient({
    //     method: "get",
    //     url: `/`,
    // });
    return await apiClient.get();
};

export const getSearchGames = async (keyword) => {
    return await apiClient({
        method: "get",
        url: `/`,
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
