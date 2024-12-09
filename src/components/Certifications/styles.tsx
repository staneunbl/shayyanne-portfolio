import styled from "styled-components";

export const CertificationSection = styled("section")`
  position: relative;
  padding: 2.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content =  styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const LinkCert = styled("a")`
  font-size: 18px;
  display: block;
  margin-top: 2rem;
  margin-bottom: 0rem;
  text-align: center;
  text-decoration: none;  /* No underline by default */
  
  &:hover .url {
    text-decoration: underline; /* Underline only the URL when hovered */
    font-style: italic;
  }
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledLine = styled.hr`
  border: 0;
  border-top: 3px solid rgb(24, 33, 109);
  margin: 0px 0 45px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.4;
`;