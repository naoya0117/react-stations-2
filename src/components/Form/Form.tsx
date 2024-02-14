import React, { FormHTMLAttributes } from 'react';

type FormProps =  FormHTMLAttributes<HTMLFormElement>;
export const Form = ({className, children, ...props} :FormProps) => {
    return (
        <form className={`${className}`} {...props} >
            {children}
        </form>
    );
}