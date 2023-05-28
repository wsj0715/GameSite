import { apiClient } from "./apiClient";

export const getPostsList = async () => {
    return await apiClient({
        method: "get",
        url: `/posts`,
    });
};

export const postPosts = async (body) => {
    return await apiClient({
        method: "post",
        url: `/posts`,
        data: body,
    });
};
