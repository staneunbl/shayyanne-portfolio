import { Row, Col, Tooltip } from "antd";
import { Fade } from "react-awesome-reveal";
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { FirstTitle, LinkSite, LinkPortfolio } from "./styles";
import { useRef } from "react";

import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  firsttitle,
  icon,
  icon2,
  icon3,
  title,
  content,
  section,
  button,
  id,
  direction,
}: ContentBlockProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleFullscreen = () => {
    if (imageRef.current) {
      if (imageRef.current.requestFullscreen) {
        imageRef.current.requestFullscreen();
      } else if ((imageRef.current as any).webkitRequestFullscreen) {
        // For Safari
        (imageRef.current as any).webkitRequestFullscreen();
      } else if ((imageRef.current as any).msRequestFullscreen) {
        // For IE/Edge
        (imageRef.current as any).msRequestFullscreen();
      }
    }
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <Tooltip title="Click to view full screen">
              <img
                ref={imageRef}
                src={icon}
                alt="Icon"
                onClick={handleFullscreen}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "450px",
                  borderRadius: "5%",
                  cursor: "pointer",
                }}
              />
            </Tooltip>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <FirstTitle>{firsttitle}</FirstTitle>
              <h6>{title}</h6>
              <Content>{content}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        if (item.title === "Download CV") {
                          return (
                            <a
                              key={id}
                              href="/CV/MARASIGAN-SHAYYANNE_CV_updated.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              style={{
                                textDecoration: "none",
                                display: "flex",
                                flex: 1,
                              }}
                            >
                              <Button
                                color={item.color}
                                style={{ width: "100%" }}
                              >
                                {item.title}
                              </Button>
                            </a>
                          );
                        }
                        return (
                          <a
                            key={id}
                            href="https://github.com/staneunbl"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            style={{
                              textDecoration: "none",
                              display: "flex",
                              flex: 1,
                            }}
                          >
                            <Button
                              color={item.color}
                              style={{ width: "100%" }}
                            >
                              {item.title}
                            </Button>
                          </a>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" && (
                      <Col span={24}>
                        <LinkPortfolio
                          href="https://www.canva.com/design/DAGYmPzAyT8/t1TZ7cQRx1lxKnv_3KbSig/edit?utm_content=DAGYmPzAyT8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit her
                          <span className="url">
                            {" "}
                            Creative Portfolio on Canva.
                          </span>
                        </LinkPortfolio>
                      </Col>
                    )}
                    {id === "product" && (
                      <Col span={24}>
                        <LinkSite
                          href="https://barangayolympia.site/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Site on{" "}
                          <span className="url">Barangay Olympia Site.</span>
                        </LinkSite>
                      </Col>
                    )}
                    {/* Render sections dynamically */}
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            icon: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <Tooltip title="Click to view fullscreen">
                                <img
                                  ref={imageRef}
                                  src={item.icon}
                                  width="85px"
                                  height="auto"
                                  alt={item.title}
                                  onClick={handleFullscreen}
                                />
                              </Tooltip>
                              <MinTitle>{item.title}</MinTitle>
                              <MinPara>{item.content}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
          <Col lg={24} md={24} sm={24} xs={24}>
            {(id === "mission" || id === "internship") && (
              <>
                <div style={{ marginTop: "3rem" }}>
                  <Row justify="space-between">
                    <Col lg={11} md={11} sm={12} xs={24}>
                      <div style={{ marginBottom: "1rem" }}>
                        <Tooltip title="Click to view fullscreen">
                          <img
                            ref={imageRef}
                            src={icon2}
                            alt="Icon 2"
                            onClick={handleFullscreen}
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "450px",
                              borderRadius: "5%",
                              cursor: "pointer",
                            }}
                          />
                        </Tooltip>
                      </div>
                    </Col>
                    <Col lg={11} md={11} sm={12} xs={24}>
                      <Tooltip title="Click to view fullscreen">
                        <img
                          ref={imageRef}
                          src={icon3}
                          alt="Icon 4"
                          onClick={handleFullscreen}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: "450px",
                            borderRadius: "5%",
                            cursor: "pointer",
                          }}
                        />
                      </Tooltip>
                    </Col>
                  </Row>
                </div>
              </>
            )}
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
