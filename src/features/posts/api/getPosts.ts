import {axios} from "@/lib/axios";
import {Posts} from "../types";

export const getPosts = async ({ threadId }: { threadId: string }): Promise<Posts>  => {
    return await axios.get(`/threads/${threadId}/posts`);
}