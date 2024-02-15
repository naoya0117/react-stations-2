import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Label } from "@/components/Form";
import {Button} from "@/components/Elements";
import { CreateThreadDTO, useCreateThread} from "../api/createThread";
export const CreateThread = () => {
    const createThreadMutation = useCreateThread();
    const [thread, setThread] = useState<CreateThreadDTO>( {data:{title: ""}});
    const navigate = useNavigate();

    const handleClick = async () => {
        if (!thread.data.title) {
            alert("タイトルを入力してください");
            return;
        }
        await createThreadMutation.mutateAsync(thread);
        navigate("/");
    }

    return (
        <Form  className="mt-10" >
            <Label className="mb-10" required>スレッドタイトル</Label>
            <Input type="text"  className="mb-10" onChange={(e) => setThread({data:{title: e.target.value}})}/>
            <Button className="w-[100%]" type="button" onClick={handleClick}>作成</Button>
        </Form>
    );
};