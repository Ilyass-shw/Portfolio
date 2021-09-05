import styled from "styled-components";

export const CardWrapper = styled.div<{ IsVidPro: string | undefined }>`
  background: ${(p) => p.theme.colors.elements};
  padding: 20px;
  display: flex;
  width: ${(p) => (p.IsVidPro == "" ? `37.4vw;` : `49%;`)};
  flex-direction: column;
  border-radius: 3px;
  ${(p) => p.IsVidPro == "" && `flex-grow: 1;`}
  ${(p) =>
    p.IsVidPro == "" &&
    `    justify-content: center;
`}
  margin: 6px 0;
  height: fit-content;

  @media (max-width: ${(p) => p.theme.screens.lg}) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const ProjectName = styled.h3`
  color: ${(p) => p.theme.colors.primary};
`;

export const ProjectDescription = styled.p`
  padding: 5px 0;
  color: ${(p) => p.theme.colors.accent};
  font-style: italic;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const Link = styled.a`
  color: ${(p) => p.theme.colors.accent};
  text-decoration: none;
  margin-right: 10px;

  :hover {
    color: ${(p) => p.theme.colors.text};
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  margin-right: 5px;
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  background: ${(p) => p.theme.colors.secondary};
  list-style-type: none;
  font-size: 12px;
`;

export const Iframe = styled.iframe`
  height: 50vw;
  @media (min-width: ${(p) => p.theme.screens.lg}) {
    height: 27vw;
  }
`;

export const Video = styled.h4`
  margin-bottom: 5px;
`;
