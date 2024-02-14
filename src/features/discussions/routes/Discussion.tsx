import {ContentLayout} from "@/components/Layout";
import {GetDiscussion} from "../components/GetDiscussion";
import {CreatePost} from "../components/CreatePost";
import { useState} from "react";

export const Discussion = () => {
    const [postCount, setPostCount] = useState(0);
    return (
        <ContentLayout title="スレッド内投稿一覧" description="一覧">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <h1 className="text-2xl mt-10">Thread</h1>
                <GetDiscussion postCount={postCount}/>
                <CreatePost postCount={postCount} setPostCount={setPostCount}/>
            </div>
        </ContentLayout>
    );
}