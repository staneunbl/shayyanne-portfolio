import React from "react";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { StyledLine } from "./styles";
import { MiddleBlockSection, Content, ContentWrapper, IconItem, IconWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  secondtitle: string;
  content: string;
  button: string;
}

const MiddleBlock = ({ title, content, }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledLine />
              <h6>{(title)}</h6>
              <Content>{(content)}</Content>
              {/* Icon section */}
              <IconWrapper>
                {/* First row */}
                <IconItem>
                  <img
                    src="/img/svg/html.svg"
                    alt="HTML"
                    width="65"
                    height="65"
                  />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/javascript.svg" alt="JavaScript" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/typescript-official-svgrepo-com.svg" alt="Typescript" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img
                    src="/img/svg/react.svg"
                    alt="React"
                    width="65"
                    height="65"
                  />
                </IconItem>
                <IconItem>
                  <img
                    src="/img/svg/angular.svg"
                    alt="Angular"
                    width="65"
                    height="65"
                  />
                </IconItem>
                <IconItem>
                  <img
                    src="/img/svg/php.svg"
                    alt="PHP"
                    width="65"
                    height="65"
                  />
                </IconItem>
              </IconWrapper>
              {/* Second row */}
              <IconWrapper style={{ marginBottom: "4rem" }}>
                <IconItem>
                  <img
                    src="/img/svg/figma.svg"
                    alt="Figma"
                    width="65"
                    height="65"
                  />
                </IconItem>
                <IconItem>
                  <img
                    src="/img/svg/bootstrap.svg"
                    alt="Bootstrap"
                    width="65"
                    height="65"
                  />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/material-ui-1.svg" alt="MaterialUI" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/shadcn-ui-seeklogo.svg" alt="ShadCN" width="65" height="65" />
                </IconItem>
              </IconWrapper>
              <StyledLine />
              <h6>{t(secondtitle)}</h6>
              <IconWrapper>
                <IconItem>
                  <img src="/img/svg/vscode3-svgrepo-com.svg" alt="Visual Code" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/microsoft-sql-server-logo-svgrepo-com.svg" alt="SSMS" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/mysql-official.svg" alt="Figma" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/postman-icon-svgrepo-com.svg" alt="Postman" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/xampp-svgrepo-com.svg" alt="Postman" width="65" height="65" />
                </IconItem>
              </IconWrapper>
              <IconWrapper style={{ marginBottom: "0rem !important" }}>
                <IconItem>
                  <img src="/img/svg/figma.svg" alt="Figma" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/AdobePremierePro.svg" alt="Adobe Premiere Pro" width="65" height="65" />
                </IconItem>
                <IconItem>
                  <img
                    src="/img/svg/AdobeIllustrator.svg"
                    alt="Adobe Illustrator"
                    width="65"
                    height="65"
                  />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/notion-seeklogo.svg" alt="Notion" width="80" height="80" />
                </IconItem>
                <IconItem>
                  <img src="/img/svg/canva.svg" alt="Canva" width="65" height="65" />
                </IconItem>
              </IconWrapper>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default MiddleBlock;
