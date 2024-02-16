import {ContentLayout} from "@/components/Layout";
import { PostList } from "../components/PostList";
import {CreatePost} from "../components/CreatePost";
import { useState} from "react";
import {useParams} from "react-router-dom";

export const Post = () => {
    const {id} = useParams<{id:string}>();
    const [postCount, setPostCount] = useState(0);
    if (id === undefined) {
        return (
            <div>error</div>
        );
    }
    return (
        <ContentLayout title="スレッド内投稿一覧" description="一覧">
            <div className="max-w-[600px] mx-auto py-6 sm:px-6 lg:px-8">
                <h1 className="text-2xl mt-10">Thread</h1>
                <PostList postCount={postCount} ThreadId={id}/>
                <CreatePost postCount={postCount} setPostCount={setPostCount} ThreadId={id}/>
            </div>
        </ContentLayout>
    );
}