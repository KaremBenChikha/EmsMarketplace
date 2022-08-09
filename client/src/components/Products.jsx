import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort, app}) => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : `http://localhost:5000/api/products?application=${cat}`
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/product?application=${app}` );
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [app]);

  useEffect(() => {
    cat && app && 
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters,app,product]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat && app
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 5)
            .map((item) => <Product item={item} key={item.id} />)}

      
    </Container>
  );
};

export default Products;
