import { axios } from '@/lib/axios';
import {MutationConfig, queryClient} from "@/lib/react-query";
import {useMutation} from "react-query";
import {Posts} from "@/features/posts/types";

export type CreatePostDTO = {
    data: {
        post: string;
    },
    id: string;
}
export const createPost = async ({data, id}: CreatePostDTO): Promise<Posts> => {
    return axios.post(`/threads/${id}/posts`, data);
}

type UseCreatePostOptions  = {
    config?: MutationConfig<typeof createPost>;
}

export const useCreatePost = ({config}: UseCreatePostOptions = {}) => {
    return useMutation({
        onMutate: async (newPost) => {
            await queryClient.cancelQueries('posts');
        },
        onError: (_, __, context: any) => {
            if(context?.previousPosts) {
                queryClient.setQueryData('posts', context.previousPosts);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('posts');
        },
        ...config,
        mutationFn: createPost,
    })
}