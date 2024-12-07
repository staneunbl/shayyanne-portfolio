import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { StyledLine } from "./styles";
import { Button } from "../../common/Button";
import { CertificationSection, Content, ContentWrapper, LinkCert } from "./styles";

interface CertificationProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const Certification = ({ title, content, button, t }: CertificationProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <CertificationSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
            <StyledLine />
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '20px', marginTop: '5px',marginBottom: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                  <div>
                    <img src="/img/icons/databasecert.png" alt="HTML" width="180" height="auto" />
                  </div>
                  <div>
                    <img src="/img/icons/htmlcsscert.png" alt="HTML" width="180" height="auto" />
                  </div>
                </div>
              </div>
                <LinkCert
                  href="https://www.credly.com/users/shayyanne-marasigan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View badges on <span className="url">Credly.</span>
                </LinkCert>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </CertificationSection>
  );
};

export default withTranslation()(Certification);
