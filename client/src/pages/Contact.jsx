import React from 'react';
import ContactSection from '../components/contactForm/ContactSection';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Na from "../components/navbar/Na";
import styled from "styled-components";
import { mobile } from "../responsive";
import { ListGroup } from 'react-bootstrap'
import SectionTitle from '../components/contactForm/SectionTitle';

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
export default function Contact() {
  return (
    <>
      
      <br/>
      <br/>
      <Na/>
      <InfoContainer>
      <Wrapper>
      <br/>
      <SectionTitle heading="contact" subheading="get in touch" />
      <ListGroup.Item>
      <ContactSection />
      </ListGroup.Item>
      </Wrapper>
      </InfoContainer>
      <Footer/>
      
    </>
  );
}