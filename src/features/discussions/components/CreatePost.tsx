import {Form, TextArea, Label} from "@/components/Form";
import {Button} from "@/components/Elements";
import {createPost, CreatePostProps as RequestPostProps, PostData} from "../api/createPost";
import { useState} from "react";
import {useParams} from "react-router-dom";

type CreatePostProps = {
    setPostCount: (postCount: number) => void;
    postCount: number;
};
export const CreatePost = ({setPostCount, postCount}:CreatePostProps) => {
    const { id } = useParams();
    const [post, setPost] = useState<PostData>({ post: ""});

    const clearForm = () => {
        setPost({post: ""});
    }
    const handleClick = () => {
        if (post.post === "") {
            alert("投稿内容がありません");
            return;
        }
        const buildPost = (id: string, post: PostData) :RequestPostProps => {
            return {id, post};
        }
        const newPost = async () :Promise<void> => {
            id !== undefined &&
            await createPost(buildPost(id, post));
            clearForm();
            setPostCount(postCount + 1);
        }
        newPost();
    }

    return (
            <Form className="flex flex-col">
                <Label  htmlFor="post" required>新規投稿</Label>
                <TextArea className="mt-10"  value={ post.post} onChange={ (e) => setPost({post: e.target.value})} id="post"/>
                <Button className="mt-10" type="button" onClick={()=>handleClick()}>投稿</Button>
            </Form>
    );
}