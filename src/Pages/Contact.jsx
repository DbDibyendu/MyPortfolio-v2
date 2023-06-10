import { m, LazyMotion, domAnimation } from "framer-motion";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full flex flex-col">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;
