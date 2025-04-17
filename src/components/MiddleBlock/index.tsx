import React from "react";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { StyledLine } from "./styles";
import {
  MiddleBlockSection,
  Content,
  ContentWrapper,
  IconItem,
  IconWrapper,
} from "./styles";

interface MiddleBlockProps {
  title: string;
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
                  <img
                    src="/img/svg/css.svg"
                    alt="CSS"
                    width="65"
                    height="65"
                  />
                </IconItem>
                <IconItem>
                  <img
                    src="/img/svg/javascript.svg"
                    alt="JavaScript"
                    width="65"
                    height="65"
                  />
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
              <IconWrapper>
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
                  <img
                    src="/img/svg/AdobePremierePro.svg"
                    alt="Adobe Premiere Pro"
                    width="65"
                    height="65"
                  />
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
                  <img
                    src="/img/svg/canva.svg"
                    alt="Canva"
                    width="65"
                    height="65"
                  />
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
