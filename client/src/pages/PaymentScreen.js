import React ,{useState} from 'react'
import {Link } from "react-router-dom"
import {useDispatch,useSelector} from 'react-redux'
import Navbar from "../components/Navbar"
import { savePaymentMethod } from '../redux/actions/CartActions'
import styled from "styled-components";
import { mobile } from "../responsive";
import Na from "../components/navbar/Na";

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
  flex-wrap: wrap;
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

const PaymentScreen = ({history}) => {
    window.scrollTo(0,0);
    const [paymentMethod, setpaymentMethod]=useState("Paypal");
    
    const dispatch = useDispatch()
    const submitHandler =(e) =>{
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        history.push("/placeorder")
    }
  return (
    <>
    <Navbar/>
    <br/>
    <Na/>
    <Container>
    <Wrapper>
      <Form onSubmit={submitHandler}>
          <Title>SELECT PAYMENT METHOD</Title>
          <br/>
    
          <Input 
              type="radio" 
              value={paymentMethod}
              required
              onChange={(e)=> setpaymentMethod(e.target.value)}
          />
          <label >Paypal or Credit Card</label>
          
          
          <br/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
      
          <Button type='submit'>Continue</Button>
      </Form>
    </Wrapper>
    </Container>
    </>
  )
}

export default PaymentScreen