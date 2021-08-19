import styled from "styled-components";

export const Layouts = styled.div`
  display: flex;
  justify-content: center;
  width: fit-content;
  background: ${(p) => p.theme.colors.elements};
  padding: 20px;
  /* display: flex;
  width: 49%; */
  flex-direction: column;
  border-radius: 3px;
  /* margin: 10px 0; */

  @media (min-width: ${(p) => p.theme.screens.lg}) {
    flex-direction: row;
  }
`;
export const BigScreenContent = styled.div`
  /* transform: translate(67px, -222px); */
  transform: translate(11vw, -44vw);
  width: 67vw;
  @media (min-width: 370px) {
    transform: translate(17%, -45vw);
  }
  @media (min-width: 400px) {
    transform: translate(18%, -45vw);
  }
  @media (min-width: ${(p) => p.theme.screens.sm}) {
    transform: translate(67px, -222px);
    width: 100%;
  }
`;
export const MobileContent = styled.div`
  transform: translate(12px, -209px);
`;
export const Layout = styled.div``;

export const Mobile = styled.div`
  overflow: hidden;
`;
export const BigScreen = styled.div`
  overflow: hidden;
`;
