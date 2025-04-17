import React, { lazy } from "react";

import MissionContent from "../../content/MissionContent.json";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <Container>
        <ScrollToTop />
        <ContentBlock
          firsttitle={MissionContent.firsttitle}
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="/img/images/cs3.png"
          icon2="/img/images/cs2.png"
          icon3="/img/images/cs4.png"
          id="mission"
        />
      </Container>
    </React.Fragment>
  );
};
export default ProjectsPage;
