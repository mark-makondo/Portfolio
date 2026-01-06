import React, { useMemo } from "react";
import PasswordIcon from "@icons/PasswordIcon";
import UserIcon from "@icons/UserIcon";

const MAX_STR_LEN = 80;

const Input: React.FC<InputProps> = ({ beforeIcon, ...rest }) => {
    const className = useMemo(() => {
        let str = "floating-label input input-sm input-border flex max-w-none items-center gap-2 w-full outline-primary";
        if (rest.className) str += ` ${rest.className}`;
        return str;
    }, [rest.className]);

    return (
        <label className={className}>
            {rest.placeholder && <span>{rest.placeholder}</span>}
            {beforeIcon}
            <input name="input" type="text" className="grow" {...rest}></input>
        </label>
    );
};

export default Input;

export const InputToggle: React.FC<InputProps> = (props) => {
    const className = useMemo(() => {
        let str = "toggle toggle-sm";
        if (props.className) str += ` ${props.className}`;
        return str;
    }, [props.className]);

    return (
        <label className="label">
            <input {...props} type="checkbox" className={className} />
            <span className="text-xs">{props.label}</span>
        </label>
    );
};

export const InputText: React.FC<InputProps> = (props) => {
    return <Input {...props} type="text" autoComplete="text" maxLength={MAX_STR_LEN} />;
};

export const InputUsername: React.FC<InputProps> = (props) => {
    return (
        <Input
            {...props}
            beforeIcon={<UserIcon className="h-4 w-4 opacity-70" />}
            placeholder="Username"
            autoComplete="username"
            maxLength={MAX_STR_LEN}
        />
    );
};

export const InputEmail: React.FC<InputProps> = (props) => {
    return (
        <Input
            {...props}
            type="email"
            beforeIcon={<UserIcon className="h-4 w-4 opacity-70" />}
            placeholder="Email"
            autoComplete="email"
            maxLength={MAX_STR_LEN}
        />
    );
};

export const InputPassword: React.FC<InputProps> = (props) => {
    return (
        <Input
            {...props}
            type="password"
            beforeIcon={<PasswordIcon className="h-4 w-4 opacity-70" />}
            placeholder="Password"
            autoComplete="currentPassword"
        />
    );
};

interface InputProps {
    beforeIcon?: React.ReactNode;
    placeholder?: string;
    className?: string;
    label?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
    autoComplete?: string;
    name?: string;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
}
