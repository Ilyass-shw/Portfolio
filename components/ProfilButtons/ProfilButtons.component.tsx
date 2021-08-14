import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    justify-content: start;
  }
`;

export const ProfilBtn = styled.a<{ background: string; hover: string }>`
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: ${(p) => p.theme.fonts.heading};
  margin: 0 10px 0 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: ${(p) => p.background};
  color: ${(p) => p.color};
  font-weight: 700;
  text-decoration: none;
  outline: none;
  :hover {
    background: ${(p) => p.hover};
  }
`;
