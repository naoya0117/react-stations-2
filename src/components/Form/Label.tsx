import {LabelHTMLAttributes} from 'react';
type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    required?: boolean;
};
export const Label = ({className, children, required, ...props}: LabelProps) => {
    return (
        <label className={`${className}`} {...props}>
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );
}