import {axios} from "@/lib/axios";
import {Thread} from "../types";
export const getThreads = (): Promise<Thread[]>  => {
    return axios.get("/threads");
}