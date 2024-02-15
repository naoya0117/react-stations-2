import { axios } from "@/lib/axios"
import {Thread} from "../types";
import {MutationConfig, queryClient} from "@/lib/react-query";
import {useMutation} from "react-query";

export type CreateThreadDTO = {
    data: {
        title: string;
    }
}
export const createThread = ({data}: CreateThreadDTO): Promise<Thread> => {
    return axios.post('/threads', data);
}

type UseCreateThreadOptions = {
    config?: MutationConfig<typeof createThread>;
}

export const useCreateThread = ({ config }:UseCreateThreadOptions = {}) => {
    return useMutation({
        onMutate: async (newThread) => {
            await queryClient.cancelQueries('threads');
            const previousThreads = queryClient.getQueryData<Thread[]>('threads');
            queryClient.setQueryData('threads', [...(previousThreads || []), newThread.data]);
            return { previousThreads };
        },
        onError: (_, __, context: any)=> {
            if (context?.previousDiscussions) {
                queryClient.setQueryData('threads', context.previousThreads)
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('threads');
            alert("スレッドを作成しました");
        },
        ...config,
        mutationFn: createThread,
    })
}