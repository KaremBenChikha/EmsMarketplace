import styled from "styled-components";
import ProdAppli from "../../components/Applications/ProdAppli";
import Footer from "../../components/Footer";
import { mobile } from "../../responsive";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <Container>
      <Title>{cat}</Title>
      <ProdAppli app={cat}/>
      <Footer />
    </Container>
  );
};

export default ProductList;
