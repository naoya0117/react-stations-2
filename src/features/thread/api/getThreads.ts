import {axios} from "@/lib/axios";
import {Thread} from "../types";
import {ExtractFnReturnType, QueryConfig} from "@/lib/react-query";
import {useQuery} from "react-query";
export const getThreads = (): Promise<Thread[]>  => {
    return axios.get("/threads");
}

type QueryFnType = typeof getThreads;

type UseThreadsOptions = {
    config?: QueryConfig<QueryFnType>;
}

export const useThreads = ({ config }: UseThreadsOptions = {}) => {
    return useQuery<ExtractFnReturnType<QueryFnType>>({
        ...config,
        queryKey: ['threads'],
        queryFn: () => getThreads(),
    })
}