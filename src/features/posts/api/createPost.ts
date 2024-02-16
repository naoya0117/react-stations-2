import { axios } from '@/lib/axios';

export type CreatePostProps = {
    id: string;
    post: PostData;
}

export type PostData = {
    post: string;
}

export const createPost = async ({id, post}: CreatePostProps): Promise<void> => {
    await axios.post(`/threads/${id}/posts`, post).catch((data) => {
        alert("投稿に失敗しました");
    });
}