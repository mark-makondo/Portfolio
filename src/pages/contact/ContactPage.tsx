import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import PageContainer from "@/common/components/shared/container/PageContainer";
import Button from "@/common/components/ui/buttons/Button";
import { InputText, InputEmail, Textarea } from "@/common/components/ui/inputs/Input";
import appConfig from "@/app.config";
import ToastService from "@/services/Toast.service";

const ContactPage: React.FC = () => {
    const [isSending, setIsSending] = useState(false);
    const form = useRef<null | HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSending(true);

        emailjs
            .sendForm(appConfig.api.email.serviceId, appConfig.api.email.templateId, form.current, {
                publicKey: appConfig.api.email.publicKey
            })
            .then(
                () => {
                    ToastService.success("Message sent successfully!");
                    setIsSending(false);
                    form.current && form.current.reset();
                },
                () => {
                    ToastService.error("Message failed to send!");
                    setIsSending(false);
                    form.current && form.current.reset();
                }
            );
    };

    return (
        <PageContainer className="page-contact" subtitle="Get In Touch" title="Let's Connect and Build Something Amazing!" alternative>
            <form ref={form} onSubmit={sendEmail} className="page-contant__form flex flex-col gap-4 w-full max-w-180 m-auto">
                <div className="page-content__form__top flex gap-4">
                    <InputText placeholder="Full Name" name="user_name" autoComplete="off" required />
                    <InputEmail placeholder="Email Address" name="user_email" autoComplete="off" required />
                </div>
                <InputText placeholder="Subject" name="user_subject" autoComplete="off" required />
                <Textarea placeholder="Message" name="message" className="min-h-50" autoComplete="off" required />
                <Button type="submit" className="btn-primary" isLoading={isSending}>
                    Send Message
                </Button>
            </form>
        </PageContainer>
    );
};

export default ContactPage;
