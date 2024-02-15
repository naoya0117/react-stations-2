import {useEffect, useState} from "react";
import {Card} from "@/components/Elements";
import {Thread} from "../types";
import {getThreads, useThreads} from "@/features/thread/api/getThreads";
import {Link} from "react-router-dom";

export const ThreadsList = () => {
    const threadsQuery = useThreads();
    if(!threadsQuery.data) {
        return <div>Loading...</div>;
    }
        return (
            <div className="flex items-center flex-col">
                {threadsQuery.data.map((thread: Thread) => (
                    <Link to={`/thread/${thread.id}`} >
                        <Card content={thread.title}/>
                    </Link>
                ))}
            </div>
        );
    }