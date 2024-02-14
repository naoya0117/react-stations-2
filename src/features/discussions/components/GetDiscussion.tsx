import {getDiscussion} from "../api/getDiscussion";
import {useState, useEffect} from "react";
import { useParams} from "react-router-dom";
import {Posts} from "../types";
import {Card} from "@/components/Elements";

type GetDiscussionProps = {
    postCount: number;
}
export const GetDiscussion = ({postCount}:GetDiscussionProps) => {
    const {id} = useParams<{id:string}>();
    console.log(id);
    const [posts, setPosts] = useState<Posts>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            if (id === undefined) {
                return;
            }
            await getDiscussion(id).then((data) => {
                setPosts(data.posts);
                console.log(data);
            });
        }
        fetchPosts();
    }, [id, postCount]);
    return (
        <div>
            {Array.isArray(posts) && posts.map((post) => {
                return (
                    <>
                        <Card content={post.post}/>
                    </>
                );
            })}
        </div>
    );
}