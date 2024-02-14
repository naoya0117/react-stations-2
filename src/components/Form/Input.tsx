import { InputHTMLAttributes } from "react";
type BaseProps = {
    className: string;
}

type BasePropsMap = {
    [key: string]: BaseProps;
};

const basePropsMap: BasePropsMap = {
    'button': {
        className: 'px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600',
    },
    'default': {
        className: 'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500',
    },
};

const getBaseProps = (type?: string): BaseProps => {
    const basePropsKey = type !== undefined && type in basePropsMap ? type : 'default';
    return basePropsMap[basePropsKey];
}

type InputProps = InputHTMLAttributes<HTMLInputElement> ;
export const Input = ({ className = '', type, ...props }: InputProps) => {
    const baseProps = getBaseProps(type);

    return (
        <input
            type={type}
            className={`${baseProps.className} ${className}`}
            {...props}
        />
    );
}