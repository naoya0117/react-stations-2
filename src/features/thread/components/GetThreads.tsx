import {useEffect, useState} from "react";
import {Card} from "@/components/Elements";
import {Thread} from "../types";
import {getThreads} from "@/features/thread/api/getThreads";
import {Link} from "react-router-dom";

export const GetThreads = () => {
    const [threads, setThreads] = useState<Thread[]>([]);
    useEffect(() => {
            const fetchThreads = async () => {
                await getThreads().then((threads) => {
                    setThreads(threads);
                }).catch((error) => {
                    console.log(error);
                });
            }
            fetchThreads();
        }
    )

        return (
            <div className="flex items-center flex-col">
                {threads.map((thread) => (
                    <Link to={`/thread/${thread.id}`} >
                        <Card content={thread.title}/>
                    </Link>
                ))}
            </div>
        );
    }