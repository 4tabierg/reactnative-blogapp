import { env } from "../env/env";
import { baseService } from "../services/baseService";

export const getBlogs = () => {
    return baseService.get(env.api, "blogs");
}

export const getBlogById = (id) => {
    return baseService.get(env.api, "blogs/" + id)
}

export const addNewBlog = (newBlog) => {
    return baseService.post(env.api, "blogs", newBlog)
}

export const deleteBlogById = (id) => {
    return baseService.delete(env.api, "blogs/" + id)
}

export const updateBlog = (id, updatedContent) => {
    return baseService.put(env.api, "blogs/" + id, updatedContent)
}