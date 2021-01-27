import Banner from "./Banner";
import Camper from "./Camper";
import Contact from "./Contact";
import Content from "./Content";
import Text from "./Text";

const COMPONENTS = {
  banner: Banner,
  content: Content,
  camper: Camper,
  text: Text,
  contact: Contact,
};

const Sections = ({ sections }) => {
  return sections.map((section) => {
    const Component = COMPONENTS[section.sys.contentType.sys.id];
    return <Component key={section.sys.id} {...section} />;
  });
};

export default Sections;
