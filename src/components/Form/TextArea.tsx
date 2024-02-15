import { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const TextArea = ({rows, cols, className, ...props}: TextAreaProps) => {
    return (
        <textarea
            className={`border border-gray-300 rounded-md p-2 ${className}`}
            cols={cols || 60}
            rows={rows || 3}
            {...props}
        />
    );
}