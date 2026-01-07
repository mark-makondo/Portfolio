import Divider from "../../ui/divider/Divider";
import Tooltip from "../../ui/tooltip/Tooltip";
import skills from "./skills";

const SkillsOverview = () => {
    return (
        <div className="flex gap-2 flex-wrap max-w-[35.3rem] items-center">
            <span className="label-sm">Stack:</span>
            <div className="h-8.5">
                <Divider className="mx-1 py-1" horizontal />
            </div>
            {skills.map((skill) => (
                <Tooltip key={skill.name} content={skill.name} invertColor>
                    <skill.icon />
                </Tooltip>
            ))}
        </div>
    );
};

export default SkillsOverview;
