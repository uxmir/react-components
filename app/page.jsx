"use cient";
import React from "react";
import Container from "./components/Container/Container";
import ColorPage, {ColorSetting}  from '../app/components/HexColorApply/ColorPage'
const page = () => {
  return (
    <>
      <Container>
        <ColorPage/>
        <ColorSetting/>
      </Container>
    </>
  );
};

export default page;
