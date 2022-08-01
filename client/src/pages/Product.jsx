import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../redux/cartRedux";
import Na from "../components/navbar/Na";
import Products from "../components/Products";
import './pro.css';
import Message from '../components/starRating/Message'
import Loader from '../components/starRating/Loader'
import { Link,useParams  } from 'react-router-dom'
 import { Row, Col, ListGroup } from 'react-bootstrap'
 import { listProductDetails, createProductReview } from '../actions/productActions'
 import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
 import {FaStar} from 'react-icons/fa'
 import { useDispatch, useSelector } from 'react-redux'
 import Rating from '../components/Rating'

 const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 100;
`;
const Title2 = styled.h2`
  font-weight: 100;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Power = styled.p`
  margin: 20px 0px;
  font-weight: 20;
  font-size: 20px;
`;
const Weight = styled.p`
  margin: 20px 0px;
  font-weight: 40;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  margin-right:12px;
  box-sizing: content-box;
  &:hover {
    background-color: #f8f4f4;
  }
`;
const Button2 = styled.button`
    border:none;
    padding: 12px 40px;
    background-color: #1c73d0;
    color:white;
    cursor: pointer;
    font-weight: 500;
    border-radius: 8px;
    min-width: 80px;
    margin-right:12px;
    margin-left:30px;
    box-sizing: content-box;
    text-align: center;
`;

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 3
      }}
  />
);

const Product = ({match}) => {
  const location = useLocation();
 
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();
  //const {userInfo} = userLogin ;
  //-------------------
  const { productId } = useParams();
  //const productId = match.params.id;
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')

  const user = useSelector((state) => state.user.currentUser);
  //const userLogin = useSelector((state) => state.userLogin)
  //const { user  } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate );
  const {
    success: successCreateReview,
    error: errorProductReview,
  } = productReviewCreate || {};


   useEffect(() => {
    if (successCreateReview) {
      alert('Review Submitted!')
      setRating(0)
      setComment('')
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
    }
    dispatch(listProductDetails(productId))
   }, [dispatch, match, successCreateReview])

   const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    )
  }

  //---------------------
  const id2 = location.pathname.split("/")[2];
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id2);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id2]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    dispatch(
      addProduct({ ...product, quantity })
    );
  };
  
  
  return (
    <Container>
      <Navbar />
      <br/>
      <Na/>
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
           </ListGroup.Item>
           <ListGroup.Item>
          <Weight>Availability : {product.inStock}</Weight>
          </ListGroup.Item>
          <ListGroup.Item>
          <Desc>{product.desc}</Desc>
          </ListGroup.Item>
          <ListGroup.Item>
          <Power>Max Power :{product.max_power} KW</Power>
          </ListGroup.Item>
          <ListGroup.Item>
          <Weight>Weight :{product.weight} Kg</Weight>
          </ListGroup.Item>
          <br/>
          <Price>$ {product.price}</Price>
          <br/>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")} />
            </AmountContainer>
            <Button2 onClick={handleClick}>Add To Cart</Button2>
            <Button2 onClick={handleClick}>Contact for Inquiry</Button2>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      
      <ListGroup.Item>
      <InfoContainer>
      
      <div class="rowA">
        <div class="columnA">
          <br/>
        <Title2>Overview</Title2>
        <br/>
        <table>

        <tr>
          <th> 
            <Power>Product name  :</Power>
          </th>
          <th>
            <Power>{product.title}</Power>
          </th>
        </tr>
        <tr>
          <th>
            
            <Power>Brand Name    :</Power>
            
          </th>
          <th>
            
            <Power>{product.company}</Power>
            
          </th>
        </tr>
        <tr>
          <th>
          <Power>Max Power      :</Power>
          </th>
          <th>
            <Power>{product.max_power} KW</Power>
          </th>
        </tr>
        <tr>
          <th>
            
            <Power>Item Weight:</Power>
          </th>
          <th>
            <Power>{product.weight} Kg</Power>
          </th>
        </tr>
        <tr>
          <th>
            <Power>Country of Origin:</Power>
          </th>
          <th>
            <Power>{product.country}</Power>
          </th>
        </tr>
        <tr>
          <th>
          <Power>Dimensions:</Power>
          </th>
          <th>
            <Power>{product.dimensions}</Power>
          </th>
        </tr>
        </table>
        </div>
        <div class="columnA">
        <br/>
        <Title2>Additional Information</Title2>
        <br/>
        <table>

      
        <th>
          <Power>Warranty & Support  :</Power>
        </th>
        <th>
          <Power>Manufacturer’s warranty can be requested from customer service. Click here to make a request to customer service.</Power>
        </th>
   
      
      </table>
        </div>
        </div>
    </InfoContainer>
    </ListGroup.Item> 
        
        
    <ListGroup.Item>
        <InfoContainer>
        <br/>
        <Title2>Customer Reviews</Title2>
        <br/>
        <Row>
          <Col md={6}>
           
            {product.reviews?.length === 0 && <Message>No Reviews</Message>}
               <ListGroup variant='flush'>
                 {product.reviews?.map((review) => (
                   <ListGroup.Item key={review._id}>
                     <strong>{review.name}</strong>
                     <Rating value={review.rating} />
                     <p>{review.createdAt?.substring(0, 10)}</p>
                     <p>{review.comment}</p>
                   </ListGroup.Item>
                 ))}
                  <ListGroup.Item>
                 {errorProductReview && (
                     <Message variant='danger'>{errorProductReview}</Message>
                   )}
                 
                   {user ? (
                     <form className="form" onSubmit={submitHandler}>
                     <div>
                        <br/>
                       <h2>Write a customer review</h2>
                       <br/>
                     </div>
                     <div>
                       <label htmlFor="rating">Rating</label>
                       <select id="rating" value={rating}
                        onChange={(e) => setRating(e.target.value)}>
                           <option value="">Select</option>
                           <option value="1">1- Bad</option>
                           <option value="2">2- Fair</option>
                           <option value="3">3- Good</option>
                           <option value="4">4- Very good</option>
                           <option value="5">5- Excelent</option>

                       </select>
                     </div>
                       <div>
                       <label htmlFor="comment">Comment</label>
                       <textarea
                         id="comment"
                         value={comment}
                         onChange={(e) => setComment(e.target.value)}
                       ></textarea>
                     </div>
                    
                     <div>
                       <label />
                       <button className="primary" type="submit">
                         Submit
                       </button>
                     </div>
                     
                   </form>
                     
                   ) : (<Message>Please <Link to='/login'
                   >sign in</Link>to write a review</Message>)}
                   
                 </ListGroup.Item>
              </ListGroup>
              

          </Col>
        </Row>
        </InfoContainer>
      </ListGroup.Item>
       
        <InfoContainer>
          
          <br/>
        <Title2>You may also like</Title2>
         
        </InfoContainer>
        <Products/>
      <Footer />
    </Container>
  );
};

export default Product;
