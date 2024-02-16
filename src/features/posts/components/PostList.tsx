import {usePosts} from "../api/getPosts";
import {useState, useEffect} from "react";
import {Card} from "@/components/Elements";
import {Post} from "../types";

type GetDiscussionProps = {
    postCount: number;
    ThreadId: string;
}
export const PostList = ({postCount, ThreadId}:GetDiscussionProps) => {
    const postsQuery = usePosts({threadId: ThreadId});
    console.log(postsQuery.data);

    if (!postsQuery.data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {
                postsQuery.data.posts.map((post) => {
                return (
                    <div className="flex justify-center">
                        <Card content={post.post}/>
                    </div>
                );
            })}
        </div>
    );
}