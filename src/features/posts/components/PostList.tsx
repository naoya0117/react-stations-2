import {getPosts} from "../api/getPosts";
import {useState, useEffect} from "react";
import {Card} from "@/components/Elements";
import {Post} from "../types";

type GetDiscussionProps = {
    postCount: number;
    ThreadId: string;
}
export const PostList = ({postCount, ThreadId}:GetDiscussionProps) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            await getPosts({threadId: ThreadId}).then((data) => {
                setPosts(data.posts);
                console.log(data);
            });
        }
        fetchPosts();
    }, [ThreadId, postCount]);
    return (
        <div>
            {Array.isArray(posts) && posts.map((post) => {
                return (
                    <div className="flex justify-center">
                        <Card content={post.post}/>
                    </div>
                );
            })}
        </div>
    );
}