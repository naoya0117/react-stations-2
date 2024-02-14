import {axios} from "@/lib/axios";
import {Posts} from "../types";

type GetDiscussionProps = {
    id: string;
    posts: Posts;
}

export const getDiscussion = async (id : string): Promise<GetDiscussionProps>  => {
    return await axios.get(`/threads/${id}/posts`);
}