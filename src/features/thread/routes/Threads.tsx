import {ContentLayout} from "@/components/Layout";
import {useState, useEffect} from "react";
import {getThreads} from "../api/getThreads";
import {Thread} from "../types";

export const Threads = () => {
    const [threads, setThreads] = useState<Thread[]>([]);
    useEffect(() => {
        getThreads().then((threads) => {
            setThreads(threads);
        });

    }, []);

    return (
        <ContentLayout title={"スレッド一覧画面"} description={"スレッドの一覧を表示します"}>
            <h1>スレッド一覧</h1>
            <ul>
                {threads.map((thread) => (
                    <li key={thread.id}>{thread.title}</li>
                ))}
            </ul>
        </ContentLayout>
    );
}