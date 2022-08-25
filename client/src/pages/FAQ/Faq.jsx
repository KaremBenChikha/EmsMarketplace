import React from "react";
import Footer from "../../components/Footer";
import Accordion from "../../components/FAQ/Accordion";
import { mobile } from "../../responsive";
import styled from "styled-components";

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 200;
  font-size: 50px;
`;

const Faq = () => {
  return (
    <>
        <h1 class="font-weight-light mt-2">Frequently Asked Questions</h1>
        <InfoContainer>
        <Accordion/>
        </InfoContainer>
        <Footer/>
    </>
  );
};

export default Faq;
