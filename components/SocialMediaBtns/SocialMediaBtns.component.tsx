import styled from "styled-components";

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 40px 40px 40px;

  @media (min-width: 1024px) {
    margin: 20px 70px 40px 5%;
  }
`;

export const Link = styled.a`
  font-size: 30px;
  color: inherit;
  text-decoration: none;
  margin: 0 10px;
`;
