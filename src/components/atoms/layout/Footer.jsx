import styled from "styled-components";

export const Footer = () => {
  return <SHeader>&copy;2021 test inc</SHeader>;
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  padding: 8px 0;
  bottom: 0;
  width: 100%;
`;
