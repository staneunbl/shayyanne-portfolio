import { Row } from "antd";
import styled from "styled-components";

export const FirstTitle = styled.h6`
  margin-bottom: 0px;
  font-size: 30px;
`;

export const ContentSection = styled("section")`
  position: relative;
  padding: 4rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const StyledLine = styled.hr`
  border: 0;
  border-top: 3px solid rgb(24, 33, 109);
  margin: 3rem 0 3rem;  
  width: 93%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.2;
`;

export const LinkSite = styled("a")`
  font-size: 18px;
  display: block;
  margin-top: 1rem;
  margin-bottom: 0rem;
  text-align: center;
  text-decoration: none;  /* No underline by default */
  
  &:hover .url {
    text-decoration: underline; /* Underline only the URL when hovered */
    font-style: italic;
  }
`;

export const LinkPortfolio = styled("a")`
  font-size: 18px;
  display: block;
  margin-bottom: 1rem;
  text-decoration: none;  /* No underline by default */
  
  &:hover .url {
    text-decoration: underline; /* Underline only the URL when hovered */
    font-style: italic;
  }
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }
`;
