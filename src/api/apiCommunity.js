import { apiClient } from "./apiClient";

export const getPostsList = async () => {
    return await apiClient({
        method: "get",
        url: `/posts`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const postPosts = async (body) => {
    return await apiClient({
        method: "post",
        url: `/posts`,
        data: body,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const changePostById = async (postid, body) => {
    return await apiClient({
        method: "patch",
        url: `/posts/${postid}`,
        data: body,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const deletePostById = async (postid) => {
    return await apiClient({
        method: "delete",
        url: `/posts/${postid}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};
