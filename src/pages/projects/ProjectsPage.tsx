import PageContainer from "@/common/components/shared/container/PageContainer";
import Projects from "@/features/projects/components/Projects";

const projects = [
    {
        id: "1",
        title: "Project One",
        imageUrl: "https://picsum.photos/800/600?random=1"
    },
    {
        id: "2",
        title: "Project Two",
        imageUrl: "https://picsum.photos/800/600?random=2"
    },
    {
        id: "3",
        title: "Project Three",
        imageUrl: "https://picsum.photos/800/600?random=3"
    },
    {
        id: "4",
        title: "Project Four",
        imageUrl: "https://picsum.photos/800/600?random=4"
    },
    {
        id: "5",
        title: "Project Five",
        imageUrl: "https://picsum.photos/800/600?random=5"
    }
];

const ProjectsPage: React.FC = () => {
    return (
        <PageContainer className="page-projects" subtitle="My Works" title="Featured Projects" alternative>
            <Projects data={projects} />
        </PageContainer>
    );
};

export default ProjectsPage;
