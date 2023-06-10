import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const Logos = () => {
    return (
        <div className="w-full h-[100px] flex justify-front items-center gap-8 p-6">

            <FontAwesomeIcon
                className="text-7xl hover:scale-[1.5] transition-all duration-75"
                icon={icons.faGithub}
            />
            <FontAwesomeIcon
                className="text-7xl hover:scale-[1.5] transition-all duration-75"
                icon={icons.faEnvelope}
            />
            <FontAwesomeIcon
                className="text-7xl hover:scale-[1.5] transition-all duration-75"
                icon={icons.faLinkedin}
            />

        </div>
    );
};

export default Logos;
