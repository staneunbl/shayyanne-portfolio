import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import { ContactProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import Block from "../Block";
import { ContactContainer } from "./styles";

const Contact = ({ title, content, id, icon }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <img src={icon} alt="Icon" style={{ width: '100%', height: 'auto', maxWidth: '500px', borderRadius: '5%' }} />
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
