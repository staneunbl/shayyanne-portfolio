import styled from "styled-components";

export const StyledLine = styled.hr`
  border: 0;
  border-top: 3px solid rgb(24, 33, 109);
  margin: 0px 0 45px;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.4;
`;

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 2.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
