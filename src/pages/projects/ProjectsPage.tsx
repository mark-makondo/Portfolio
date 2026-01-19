import PageContainer from "@/common/components/shared/container/PageContainer";

const ProjectsPage: React.FC = () => {
    return (
        <PageContainer className="page-projects" subtitle="My Works" title="Featured Projects" alternative>
            <div className="page-projects__content grow shrink basis-0 min-h-0 w-full gap-4 justify-between"></div>
        </PageContainer>
    );
};

export default ProjectsPage;
