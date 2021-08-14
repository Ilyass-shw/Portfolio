import React from "react";
import { Container, ProfilBtn } from "./ProfilButtons.component";
const ProfilButtons: React.FC = () => {
  return (
    <Container>
      <ProfilBtn
        href="mailto:fourkani.ilyass@gmail.com"
        background="#ff7e67"
        color="#1a1c20"
        hover="#ed6c55"
      >
        EMAIL ME
      </ProfilBtn>
      <ProfilBtn background="#2C323D" color="#C1C2C6" hover="#353c4a">
        RESUME
      </ProfilBtn>
    </Container>
  );
};

export default ProfilButtons;