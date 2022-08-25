import styled from "styled-components";
import ProdAppliType from "../../components/Applications/ProdAppliType";
import Footer from "../../components/Footer";
import { mobile } from "../../responsive";
import { useLocation } from "react-router";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;


const ApplicationType = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  return (
    <>
   
    <Container>
      <Title>{cat}</Title>
      <ProdAppliType app={cat}/>
      <Footer />
    </Container>
    </>
  );
};

export default ApplicationType;
