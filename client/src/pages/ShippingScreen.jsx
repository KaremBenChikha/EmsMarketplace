import React ,{useState} from 'react'
import {Link } from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import Navbar from "../components/Navbar"
import { saveShippingAddress } from '../redux/actions/CartActions'
import Na from "../components/navbar/Na";
import FormContainer from '../components/contactForm/FormContainer'
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;


const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px;
  background-color: #1888ff;
  color: white;
  cursor: pointer;
`;

const ShippingScreen = ({history}) => {
    window.scrollTo(0,0);

    const cart2 = useSelector((state) => state.cart2);
    const {shippingAddress}=cart2

    const [address, setAddress]=useState(shippingAddress.address)
    const [city, setCity]=useState(shippingAddress.city)
    const [postalCode, setpostalCode]=useState(shippingAddress.postalCode)
    const [country, setcountry]=useState(shippingAddress.country)
    
    const dispatch = useDispatch()
    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,postalCode,country}))
        history.push("/payment")
    }
  return (
    <>
    <Navbar />
      <br/>
      <Na/>
    <Container>
    <Wrapper>
      <Form onSubmit={submitHandler}>
            <Title>DELIVERY ADDRESS</Title>
         
         <br/>
           <Input
             type='text'
             placeholder='Enter address'
             value={address}
             onChange={(e) => setAddress(e.target.value)}
           ></Input>
            <br/>
           <Input
             type='text'
             placeholder='Enter city'
             value={city}
             onChange={(e) => setCity(e.target.value)}
           ></Input>
             <br/>
           <Input
             type='text'
             placeholder='Enter postal code'
             value={postalCode}
             onChange={(e) => setpostalCode(e.target.value)}
           ></Input>

           <Input
             type='text'
             placeholder='Enter country'
             value={country}
             onChange={(e) => setcountry(e.target.value)}
           ></Input>
            <br/>
          
          <Agreement>
            Choose your Region or Country to place an <b> order </b>
          </Agreement>
         <Button type='submit' variant='primary'>
           Continue
         </Button>
       </Form>
        </Wrapper>
       </Container>
    </>
  )
}

export default ShippingScreen