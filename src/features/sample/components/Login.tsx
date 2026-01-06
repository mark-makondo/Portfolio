import Card from "../../../../common/components/ui/cards/Card";
import LogoSquareIcon from "../../../../common/components/icons/LogoSquareIcon";
import { InputEmail, InputPassword } from "@ui/inputs/Input";
import RouteLink from "../../../../common/components/ui/navigation/RouteLink";
import Button from "@ui/buttons/Button";
import { useAdminLogin } from "../auth.hooks";
import { FormEvent } from "react";
import { getErrorMessage } from "@/common/utilities/helper";

const Login: React.FC = () => {
    const [login, isLoading, { form, onChange, error }] = useAdminLogin();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        login();
    };

    return (
        <Card
            className="login-admin p-3 shadow-primary md:min-w-[20rem] bg-white"
            header={
                <div className="login-admin__header flex items-center justify-center mt-4">
                    <LogoSquareIcon />
                </div>
            }
        >
            {error && "data" in error && (
                <div className="alert alert-soft alert-error flex items-center justify-center w-full mb-6">
                    <span className="text-xs">{getErrorMessage(error)}</span>
                </div>
            )}
            <form onSubmit={handleLogin} className="login-admin__inner flex flex-col gap-4 w-full">
                <InputEmail name="email" value={form.email} onChange={onChange} autoComplete="email admin" required />
                <InputPassword name="password" value={form.password} onChange={onChange} autoComplete="currentPassword admin" required />
                <div className="flex gap-2 items-center mt-2">
                    <Button type="submit" className="btn-primary" isLoading={isLoading}>
                        Login
                    </Button>
                    <RouteLink>or Company Login</RouteLink>
                </div>
            </form>
        </Card>
    );
};

export default Login;
