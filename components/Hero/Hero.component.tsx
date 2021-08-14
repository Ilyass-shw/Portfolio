import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  justify-content: flex-start;
  padding: 30px 0;
  margin: 0 auto;
 
  @media (max-width: ${(p) => p.theme.screens.lg}) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 10px;
    width: 90%;
  }
`;

export const Avatar = styled.img`
  vertical-align: middle;
  width: 175px;
  height: 175px;
  border-radius: 50%;
  margin: 0 0 10px 5%;

  @media (max-width: ${(p) => p.theme.screens.sm}) {
    margin: 0;
  }
`;

export const ShortIntro = styled.h1`
  font-size: 36px;
  font-weight: 500;
  max-width: 70%;

  @media (max-width: ${(p) => p.theme.screens.lg}) {
    padding: 10px 0;
    font-size: 24px;
    max-width: 100%;
    text-align: center;
  }
`;
