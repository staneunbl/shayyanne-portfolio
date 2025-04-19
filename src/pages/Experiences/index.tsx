import React, { lazy } from "react";

import IntenshipContent from "../../content/IntenshipContent.json";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const ProjectsPage = () => {
  return (
    <React.Fragment>
      <Container>
        <ScrollToTop />
        <ContentBlock
          firsttitle={IntenshipContent.firsttitle}
          direction="right"
          title={IntenshipContent.title}
          content={IntenshipContent.text}
          icon="/img/images/react_logo.png"
          icon2="/img/images/intern_1.png"
          icon3="/img/images/intern_2.png"
          id="internship"
        />
      </Container>  
    </React.Fragment>
  );
};
export default ProjectsPage;
