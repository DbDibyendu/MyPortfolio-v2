import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Components/SectionTitle";
import ContactForm from "../Components/ContactForm";
import SocialLinks from "../Components/SocialLinks";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[100px] flex flex-col xl:w-[70%]">
      </div>
      <div className="w-full flex flex-col">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;
