import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { FirstTitle, LinkSite, StyledLine, LinkPortfolio } from './styles';

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
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
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
            <img src={icon} alt="Icon" style={{ width: '100%', height: 'auto', maxWidth: '450px', borderRadius: '5%'   }} />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <FirstTitle>{t(firsttitle)}</FirstTitle>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
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
                            href="/CV/CV-Shayanne-Marasigan.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            style={{ textDecoration: 'none', display: 'flex', flex: 1 }}
                          >
                            <Button color={item.color} style={{ width: '100%' }}>
                              {t(item.title)}
                            </Button>
                          </a>
                        );
                      }
                      return (
                        <Button
                          key={id}
                          color={item.color}
                          onClick={() => scrollTo("about")}
                          style={{ width: '100%' }}
                        >
                          {t(item.title)}
                        </Button>
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
                        Visit her<span className="url"> Creative Portfolio on Canva.</span>
                      </LinkPortfolio>
                    </Col>
                  )}

                  {(id === 'product') && (
                    <Col span={24}>
                      <LinkSite
                          href="https://barangayolympia.site/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Site on <span className="url">Barangay Olympia Site.</span>
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
                            <img
                              src={item.icon}
                              width="85px"
                              height="auto"
                              alt={item.title}
                            />
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
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
            {(id === 'mission') && (
              <>
                <div style={{ marginTop: '3rem' }}>
                  <Row justify="space-between">
                    <Col lg={11} md={11} sm={12} xs={24}>
                    <div style={{ marginBottom: '1rem' }}>
                        <img 
                          src={icon2} 
                          alt="Icon 2" 
                          style={{ 
                            width: '100%', 
                            height: 'auto', 
                            maxWidth: '450px', 
                            borderRadius: '5%' 
                          }} 
                        />
                      </div>
                    </Col>
                    <Col lg={11} md={11} sm={12} xs={24}>
                      <img 
                        src={icon3} 
                        alt="Icon 4" 
                        style={{ 
                          width: '100%', 
                          height: 'auto', 
                          maxWidth: '450px', 
                          borderRadius: '5%' 
                        }} 
                      />
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

export default withTranslation()(ContentBlock);