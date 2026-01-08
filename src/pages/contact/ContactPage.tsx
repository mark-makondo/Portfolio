import PageContainer from "@/common/components/shared/container/PageContainer";
import Button from "@/common/components/ui/buttons/Button";
import { InputText, InputEmail, Textarea } from "@/common/components/ui/inputs/Input";

const ContactPage: React.FC = () => {
    return (
        <PageContainer className="page-contact" subtitle="Get In Touch" title="Let's Connect and Build Something Amazing!" alternative>
            <form className="page-contant__form flex flex-col gap-4 w-full max-w-180">
                <div className="page-content__form__top flex gap-4">
                    <InputText placeholder="Full Name" name="name" />
                    <InputEmail placeholder="Email Address" name="email-address" />
                </div>
                <InputText placeholder="Subject" name="subject" />
                <Textarea placeholder="Message" name="message" className="min-h-50" />
                <Button type="submit" className="btn-primary">
                    Send Message
                </Button>
            </form>
        </PageContainer>
    );
};

export default ContactPage;
