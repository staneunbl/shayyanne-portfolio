import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { StyledLine } from "./styles";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
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
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                {/* First row */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  <div>
                    <img src="/img/svg/HTML.svg" alt="HTML" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/CSS.svg" alt="CSS" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/JavaScript.svg" alt="JavaScript" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/React.svg" alt="React" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/Angular.svg" alt="Angular" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/PHP.svg" alt="PHP" width="65" height="65" />
                  </div>
                </div>
                {/* Second row */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  <div>
                    <img src="/img/svg/Figma.svg" alt="Figma" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/Bootstrap.svg" alt="Glide Apps" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/AdobePremierePro.svg" alt="Adobe Premiere Pro" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/AdobeIllustrator.svg" alt="Adobe Illustrator" width="65" height="65" />
                  </div>
                  <div>
                    <img src="/img/svg/Canva.svg" alt="Canva" width="65" height="65" />
                  </div>
                </div>
              </div>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);