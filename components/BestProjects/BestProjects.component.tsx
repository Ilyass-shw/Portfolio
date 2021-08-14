import styled from "styled-components";

export const Wrapper = styled.section`
  margin: 0 10%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Heading = styled.h1`
  color: ${(p) => p.theme.colors.text};
`;

export const SubHeading = styled.p`
  color: ${(p) => p.theme.colors.accent};
`;

export const Container = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
