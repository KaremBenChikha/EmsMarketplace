import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import { mobile } from "../responsive";
import Na from "../components/navbar/Na";
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

const Home = () => {
  return (
    <div>
      <Navbar />
      <br/>
      <Na/>
      <Slider />
      <Categories />
        <InfoContainer>
        <Title>New Products</Title>
        </InfoContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
