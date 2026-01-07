import React, { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import clsx from "clsx";
import PasswordIcon from "@icons/PasswordIcon";
import UserIcon from "@icons/UserIcon";

const MAX_STR_LEN = 80;
const MAX_LONG_STR_LEN = 1000;

type InputAttributes = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
type TextareaAttributes = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

type InputProps = InputAttributes & {
    beforeIcon?: React.ReactNode;
    label?: string;
};

type TextareaProps = TextareaAttributes & {
    beforeIcon?: React.ReactNode;
    label?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ beforeIcon, placeholder, className, ...props }, ref) => (
    <label className={clsx("floating-label input input-sm w-full", className)}>
        <input {...props} ref={ref} placeholder={placeholder || " "} className="grow" maxLength={MAX_STR_LEN} />
        <span>{placeholder}</span>
        {beforeIcon}
    </label>
));

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ beforeIcon, placeholder, className, ...props }, ref) => (
    <label className={clsx("floating-label textarea w-full", className)}>
        <textarea {...props} ref={ref} placeholder={placeholder || " "} className="grow resize-none" maxLength={MAX_LONG_STR_LEN} />
        <span>{placeholder}</span>
        {beforeIcon}
    </label>
));

export const InputToggle = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <label className="label">
            <input {...props} ref={ref} type="checkbox" className={clsx("toggle toggle-sm", props.className)} />
            <span className="text-xs">{props.label}</span>
        </label>
    );
});

export const InputText = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <Input {...props} ref={ref} type="text" autoComplete="text" maxLength={MAX_STR_LEN} />;
});

export const InputUsername = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <Input
            {...props}
            ref={ref}
            beforeIcon={<UserIcon className="h-4 w-4 opacity-70" />}
            placeholder="Username"
            autoComplete="username"
            maxLength={MAX_STR_LEN}
        />
    );
});

export const InputEmail = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <Input
            {...props}
            ref={ref}
            type="email"
            beforeIcon={<UserIcon className="h-4 w-4 opacity-70" />}
            placeholder="Email"
            autoComplete="email"
            maxLength={MAX_STR_LEN}
        />
    );
});

export const InputPassword = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <Input
            {...props}
            ref={ref}
            type="password"
            beforeIcon={<PasswordIcon className="h-4 w-4 opacity-70" />}
            placeholder="Password"
            autoComplete="currentPassword"
        />
    );
});
