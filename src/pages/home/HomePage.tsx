import { useNavigate } from "react-router";
import appConfig from "@/app.config";
import ArrowRightUpLineIcon from "@/common/components/icons/ArrowRightUpLineIcon";
import HandShakeIcon from "@/common/components/icons/HandShakeIcon";
import WaveIcon from "@/common/components/icons/WaveIcon";
import Tag from "@/common/components/shared/tag/Tag";
import TYPES from "@/common/components/shared/tag/tagTypes";
import Socials from "@/common/components/shared/socials/Socials";
import { ROUTE_PATHS } from "@/router/registry";
import SkillsOverview from "@/common/components/shared/skills/SkillsOverview";

const Home: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="page page-home flex flex-col justify-between gap-20 h-full w-full min-w-0">
            <img
                className="portrait absolute bottom-0 w-[50%] -right-24 max-w-140 hidden xlg:block"
                src="/images/portrait.webp"
                alt="mark-makondo"
                loading="lazy"
            />

            <div className="page-home__status flex gap-2 w-full mt-0 flex-wrap">
                <Tag type={appConfig.isAvailableForWork ? TYPES.AVAILABLE_FOR_WORK : TYPES.NOT_AVAILABLE_FOR_WORK} />
                <Tag type={TYPES.CURRENT_LOCATION} />
                <Tag type={TYPES.NATIONALITY} />
            </div>

            <div className="page-home__content shrink grow basis-0 w-full flex flex-col gap-8">
                <div className="page-home__name">
                    <div className="flex text-primary-600 font-semibold font-work-sans items-center gap-1">
                        <span>Hello!</span>
                        <WaveIcon />, my name is
                    </div>
                    <h1 className="flex font-normal! text-gray-800 font-work-sans">
                        <div className="text-red-500 hidden xlg:block">{"<"}</div>
                        Mark Albert Makondo
                        <div className="text-red-500 hidden xlg:block">{"/>"}</div>
                    </h1>
                </div>
                <div className="page-home__about max-w-200">
                    <h3 className="-mt-2.5 font-normal!">A full stack engineer with 5+ years of experience.</h3>
                </div>
                <div className="page-home__call-to-action flex gap-2">
                    <button className="btn btn-primary" onClick={() => navigate(ROUTE_PATHS.CONTACT_ME)}>
                        Let's Talk
                        <HandShakeIcon />
                    </button>
                    <button className="btn btn-outline btn-primary border-2" onClick={() => navigate(ROUTE_PATHS.PROJECTS)}>
                        Projects
                        <ArrowRightUpLineIcon />
                    </button>
                </div>
            </div>
            <div className="page-home__bottom w-full flex flex-col gap-8">
                <div className="page-home__skills-overview opacity-55 w-full">
                    <SkillsOverview />
                </div>
                <div className="page-home__socials w-full md:h-9">
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Home;
