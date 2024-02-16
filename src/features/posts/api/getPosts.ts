import {axios} from "@/lib/axios";
import {Posts} from "../types";
import {ExtractFnReturnType, QueryConfig} from "@/lib/react-query";
import {useQuery} from "react-query";

export const getPosts = ({ threadId }: { threadId: string }): Promise<Posts>  => {
    return axios.get(`/threads/${threadId}/posts`);
}

type QueryFnType = typeof getPosts;

type UsePostsOptions = {
    threadId: string;
    config?: QueryConfig<QueryFnType>;
};

export const usePosts =  ({ threadId, config }: UsePostsOptions) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['posts'],
        queryFn: () => getPosts({threadId}),
    });
};