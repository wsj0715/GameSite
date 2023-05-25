import { apiClient } from "./apiClient";
export const getAllGames = async () => {
    return await apiClient({
        method: "get",
        url: `/`,
    });
};
