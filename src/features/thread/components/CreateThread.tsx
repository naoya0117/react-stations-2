import { useState} from "react";
import { Form, Input, Label } from "@/components/Form";
import {createThread, CreateThreadProps } from "../api/createThread";
import {Button} from "@/components/Elements";
import { useNavigate } from "react-router-dom";
export const CreateThread = () => {
    const [title, setTitle] = useState<CreateThreadProps>({title: ""});
    const navigate = useNavigate();

    const handleClick = () => {
        const newThread = async () :Promise<void>=> {
            await createThread(title);
            navigate("/");
        }
        newThread();

    }
    return (
        <Form  onSubmit={handleClick} className={"mt-10"}>
            <Label className="mb-10" required>スレッドタイトル</Label>
            <Input type="text"  className="mb-10" onChange={(e) => setTitle({title: e.target.value})} required/>
            <Button type="button" onClick={()=>handleClick()}>作成</Button>
        </Form>
    );
};