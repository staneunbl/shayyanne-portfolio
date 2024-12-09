import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  Extra,
  LogoContainer,
  FooterContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };
  return (
    <>
      <Extra>
        <Container border={true}>
          <Row justify="space-between" align="middle" style={{ paddingTop: "3rem" }}>
            <Col xs={24} sm={12} md={12} lg={12}>
              <div>
                <LogoContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="64px"
                  />
                  <p style={{ marginTop: '10px', fontSize: '14px', color: '#555', textAlign: 'left' }}>
                      This website is built with React, utilizing Ant Design for UI components, react-awesome-reveal for animations, and styled-components for CSS-in-JS styling.
                  </p>
                </LogoContainer>
              </div>
            </Col>
            <Col xs={24} sm={12} md={12} lg={12}>
              <FooterContainer style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px' }}>
                <SocialLink
                  href="https://www.linkedin.com/in/shayyanne-dominiq-marasigan-72727a334/"
                  src="facebook.svg"
                />
                <SocialLink
                  href="https://instagram.com/staneunbl"
                  src="instagram.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/in/lasha-kakabadze/"
                  src="linkedin.svg"
                />
                <SocialLink
                  href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzCbVdBNRBtfrVXZvTLWwzfXzKSXMSmPHqPdKGrxrlLJBrTdNkpQVSxscpTnBgbgwCxgvzq"
                  src="gmail.svg"
                />
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </Extra>

    </>
  );
};

export default withTranslation()(Footer);
