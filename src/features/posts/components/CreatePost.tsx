import {Form, TextArea, Label} from "@/components/Form";
import {Button} from "@/components/Elements";
import {useCreatePost} from "../api/createPost";
import {useState} from "react";

type CreatePostProps = {
    setPostCount: (postCount: number) => void;
    postCount: number;
    ThreadId: string;
};
export const CreatePost = ({setPostCount, postCount, ThreadId}:CreatePostProps) => {
    const createPostMutation = useCreatePost();
    const [post, setPost] = useState<string>("");

    const handleClick = async() => {
        if (post === "") {
            alert("投稿内容が空です");
            return;
        }
        await createPostMutation.mutateAsync({data: {post: post}, id: ThreadId});
    }

    return (
            <Form className="flex flex-col">
                <Label  htmlFor="post" required>新規投稿</Label>
                <TextArea className="mt-10"  value={ post} onChange={ (e) => setPost(e.target.value)} id="post"/>
                <Button className="mt-10" type="button" onClick={()=>handleClick()}>投稿</Button>
            </Form>
    );
}