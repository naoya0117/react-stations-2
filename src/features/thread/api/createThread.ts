import { axios } from "@/lib/axios"
import { ThreadTitle } from "../types"

export type CreateThreadProps = {
    title: ThreadTitle;
}
export const createThread = async(data: CreateThreadProps): Promise<void> => {
   await axios.post('/threads', data).then(() => {
       alert("スレッドを作成しました");
    }).catch(() => {
        alert("スレッドの作成に失敗しました");
    });

}