import PageContainer from "@/common/components/shared/container/PageContainer";
import InfiniteCards from "@/common/components/ui/animations/infiniteCards/InfiniteCards";
import Avatar from "@/common/components/ui/avatar/Avatar";
import Card from "@/common/components/ui/cards/Card";
import React from "react";

const TetimonialItem: React.FC<{ name: string; role: string; message: string }> = ({ name, role, message }) => {
    return (
        <Card
            header={
                <div className="testimonial-item__message h-full flex justify-center items-center">
                    <p className="text-sm">{message}</p>
                </div>
            }
            className="testimonial-item h-60 w-[20rem]"
        >
            <div className="testimonial-item__author flex gap-4 w-full items-center">
                <div className="testimonial-item__avatar gap-2">
                    <Avatar name={name} />
                </div>
                <div className="testimonial-item__info flex flex-col w-full">
                    <span className="testimonial-item__name text-primary-700">{name}</span>
                    <span className="testimonial-item__role text-sm">{role}</span>
                </div>
            </div>
        </Card>
    );
};

const data = [
    {
        name: "Alex Rivera",
        role: "Project Manager",
        message:
            "Having him on the team was a game-changer. He took full ownership of the technical stack, bridgeing the gap between complex backend logic and a polished UI effortlessly."
    },
    {
        name: "Samantha Reed",
        role: "Lead Designer",
        message:
            "He is one of the few developers I've worked with who truly respects the design process. He translated my most complex layouts into functional code without losing any of the creative intent."
    },
    {
        name: "Jameson Kray",
        role: "Client & Founder",
        message:
            "He didn't just build my web app; he helped architect the entire vision. His expertise in full-stack development meant I could trust him with the most critical parts of my business."
    },
    {
        name: "Dr. Aris Thorne",
        role: "Technical Lead",
        message:
            "He stepped into our codebase and immediately raised the standard. His ability to refactor our API architecture while keeping the frontend performant was exactly what the project needed."
    },
    {
        name: "Liam O'Connell",
        role: "Software Engineer",
        message:
            "I've worked alongside many developers, but his approach to state management and clean code is top-tier. He makes the most difficult full-stack tasks look easy."
    }
];

const TestimonialsPage: React.FC = () => {
    return (
        <PageContainer
            className="page-testimonials relative"
            subtitle="Testimonials"
            title="What people say working with me"
            alternative
            hiddenScroll
        >
            <InfiniteCards
                items={data.map((item) => (
                    <TetimonialItem name={item.name} role={item.role} message={item.message} />
                ))}
            />
        </PageContainer>
    );
};

export default TestimonialsPage;
