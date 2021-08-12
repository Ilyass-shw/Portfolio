import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 10px 5%;

  @media (max-width: 1024px) {
    padding: 10px 40px;
  }

  @media (max-width: ${(p) => p.theme.screens.md}) {
    padding: 10px;
  }
`;

export const ProfilBtn = styled.a<{ background: string; hover: string }>`
  padding: 10px 20px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-family: ${(p) => p.theme.fonts.heading};
  margin: 0 10px;
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
