"use cient";
import React from "react";
import Container from "./components/Container/Container";
import TextReveal from '../app/components/TextSplitReveal/TextSplit'
import PageTransition2 from "./components/PageTransition/PageTransition2";
const page = () => {
  return (
    <>
    
      <Container>

        <div>
          <PageTransition2/>
          {/* <TextReveal/> */}
        </div>
      </Container>
    </>
  );
};

export default page;
