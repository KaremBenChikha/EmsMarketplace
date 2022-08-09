import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import Applications from "../components/Applications";
import Na from "../components/navbar/Na";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];


  return (
    <Container>
      <Navbar />
      <br/>
      <Na/>
      <Title>{cat}</Title>

      <Products app={cat}/>
      
      <Footer />
    </Container>
  );
};

export default ProductList;
