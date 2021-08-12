import styled from "styled-components";

export const StyledLink = styled.a`
  list-style-type: none;
  margin-right: 20px;

  text-decoration: none;
  color: ${(p) => p.theme.colors.accent};

  :hover {
    color: ${(p) => p.theme.colors.text};
    transition: 0.2s;
  }

  &.active {
    color: ${(p) => p.theme.colors.primary};
  }
`;
