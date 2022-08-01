import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from '../actions/userActions'
import { NavDropdown, Navbar } from 'react-bootstrap'
import {
  FavoriteBorderOutlined
} from "@material-ui/icons";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color:black;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar1 = () => {
  //----------------------
  const user = useSelector((state) => state.user.currentUser);
 //const userLogin = useSelector((state) => state.userLogin)
  //const { user  } = userLogin
  const dispatch = useDispatch()
  const logoutHandler = () => {
    localStorage.clear();
    window.location.href = '/';
  }
  //--------------------
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        
        </Left>
        <Center>
          <Link className="link" to='/'>
            <Logo>LAMA.</Logo>
          </Link>
        </Center>
        <Right>
        
        

        
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        {user ? (
 
        <NavDropdown title={user.username} id='username'>
          <NavDropdown.Item onClick={logoutHandler}>
            Logout
          </NavDropdown.Item>
        </NavDropdown>
       
      ) : (
        <>
        
            <Container/>
              <Link className="link"
               to='/login'>
                  <i className='fas fa-user'></i> Sign In
              </Link>
              <Link className="link" to="/register">
                  <MenuItem>REGISTER</MenuItem>
              </Link></>
       
      )}

          <Link className="link" to="/wishlist">
            <MenuItem>
                <FavoriteBorderOutlined />
            </MenuItem>
          </Link>
          
          <Link className="link" to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge> 
          </MenuItem>
          </Link>

          

        </Right>
      </Wrapper>
    </Container>
   
  );
};

export default Navbar1;
