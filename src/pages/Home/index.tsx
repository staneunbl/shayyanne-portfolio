import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import ContactContent from "../../content/ContactContent.json";
import AboutContent from "../../content/AboutContent.json";
import CertificationContent from "../../content/CertificationContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Certifications = lazy(() => import("../../components/Certifications"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        firsttitle={IntroContent.firsttitle}
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="/img/images/shay.JPG"
        id="intro"
      />
      <MiddleBlock
        title={MiddleBlockContent.title}
        secondtitle={MiddleBlockContent.secondtitle}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <Certifications
        title={CertificationContent.title}
        content={CertificationContent.text}
        button={CertificationContent.button}
      />
      <ContentBlock
        direction="left"
        firsttitle={AboutContent.firsttitle}
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="/img/images/orgs.png"
        id="about"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        icon="/img/images/shay2.jpg"
        id="contact"
      />
    </Container>
  );
};

export default Home;
