import {axios} from "@/lib/axios";
import {Thread} from "../types";
export const getThreads = async (): Promise<Thread[]>  => {
    return await axios.get("/threads");
}