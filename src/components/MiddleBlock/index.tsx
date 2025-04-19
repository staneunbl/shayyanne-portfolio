import { Row, Col, Tooltip } from "antd";
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
  secondtitle: string;
  content: string;
  button: string;
}

const MiddleBlock = ({ title, content, secondtitle }: MiddleBlockProps) => {
  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledLine />
              <h6>{title}</h6>
              <Content>{content}</Content>
              {/* Icon section */}
              <IconWrapper>
                <IconItem>
                  <Tooltip title="HTML">
                    <img
                      src="/img/svg/html.svg"
                      alt="HTML"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="JavaScript">
                    <img
                      src="/img/svg/javascript.svg"
                      alt="JavaScript"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="TypeScript">
                    <img
                      src="/img/svg/typescript-official-svgrepo-com.svg"
                      alt="TypeScript"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="React">
                    <img
                      src="/img/svg/react.svg"
                      alt="React"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Angular">
                    <img
                      src="/img/svg/angular.svg"
                      alt="Angular"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="PHP">
                    <img
                      src="/img/svg/php.svg"
                      alt="PHP"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
              </IconWrapper>

              {/* Second row */}
              <IconWrapper style={{ marginBottom: "4rem" }}>
                <IconItem>
                  <Tooltip title="Next.js">
                    <img
                      src="/img/svg/next-js.svg"
                      alt="Next JS"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Figma">
                    <img
                      src="/img/svg/figma.svg"
                      alt="Figma"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Bootstrap">
                    <img
                      src="/img/svg/bootstrap.svg"
                      alt="Bootstrap"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Material UI">
                    <img
                      src="/img/svg/material-ui-1.svg"
                      alt="MaterialUI"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="ShadCN UI">
                    <img
                      src="/img/svg/shadcn-ui-seeklogo.svg"
                      alt="ShadCN"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
              </IconWrapper>

              <StyledLine />

              <h6>{secondtitle}</h6>
              <IconWrapper>
                <IconItem>
                  <Tooltip title="Visual Studio Code">
                    <img
                      src="/img/svg/vscode3-svgrepo-com.svg"
                      alt="Visual Code"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="SQL Server Management Studio (SSMS)">
                    <img
                      src="/img/svg/microsoft-sql-server-logo-svgrepo-com.svg"
                      alt="SSMS"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="MySQL">
                    <img
                      src="/img/svg/mysql-official.svg"
                      alt="MySQL"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Postman">
                    <img
                      src="/img/svg/postman-icon-svgrepo-com.svg"
                      alt="Postman"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="XAMPP">
                    <img
                      src="/img/svg/xampp-svgrepo-com.svg"
                      alt="XAMPP"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
              </IconWrapper>

              <IconWrapper>
                <IconItem>
                  <Tooltip title="Figma">
                    <img
                      src="/img/svg/figma.svg"
                      alt="Figma"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Adobe Premiere Pro">
                    <img
                      src="/img/svg/AdobePremierePro.svg"
                      alt="Adobe Premiere Pro"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Adobe Illustrator">
                    <img
                      src="/img/svg/AdobeIllustrator.svg"
                      alt="Adobe Illustrator"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Canva">
                    <img
                      src="/img/svg/canva.svg"
                      alt="Canva"
                      width="65"
                      height="65"
                    />
                  </Tooltip>
                </IconItem>
                <IconItem>
                  <Tooltip title="Notion">
                    <img
                      src="/img/svg/notion-seeklogo.svg"
                      alt="Notion"
                      width="80"
                      height="80"
                    />
                  </Tooltip>
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
