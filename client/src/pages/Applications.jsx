import React from 'react'
import Applications from "../components/Applications";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";
import Na from "../components/navbar/Na";
import styled from "styled-components";
import { ListGroup } from 'react-bootstrap'

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;
const Title = styled.h1`
  font-weight: 100;
  margin: 16px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

const Applicationss = () => {
  return (
    <div>
    <Navbar />
    <br/>
    <Na/>
    <br/>
    
    <Title> APPLICATIONS </Title>
    
    <ListGroup.Item>
    <InfoContainer>
    <Desc>
        Cummins diesel generator sets can help you solve all your power needs. Cummins can help protect your business from the serious consequences of losing power, as almost all businesses are dependent on electrical power. Cummins, a global power leader, can provide reliable emergency standby and prime power systems for homes and businesses that can minimise downtime.
        Cummins Power Generation certified dealers can help provide a Cummins power system that can protect you and your business from 17 to 550kVA. Fully trained and certified Cummins dealers work with Cummins to provide a total power solutions for business. Our dealers work closely with you to provide a complete service from initial advice at the quotation and proposal stage, through to installation, commissioning and lifetime generator service and maintenance support.
    </Desc>
    </InfoContainer>
    
    <Applications />
    </ListGroup.Item>
    <Footer/>
  </div>
  )
}

export default Applicationss