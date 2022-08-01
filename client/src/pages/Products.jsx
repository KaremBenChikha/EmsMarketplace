import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import "./styles_filter.css";
import Na from "../components/navbar/Na";
import { event } from "jquery";
import { dataList } from '../components/constants';
import { useEffect } from "react";
import axios from "axios";
import Product from "../components/Product";
import Filter from '../components/Filter/Filter'
import List from '../components/List/List'
import Search from '../components/Search/Search'
import Empty from '../components/Partials/Empty/Empty'
import './products.css'
import { categoryList } from '../data/data';

const Container = styled.div``;

/*const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
*/

//------------------------------------------------
const Products1 = () => {
   
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 1000000000]);
  const [brands, setBrands] = useState([]);
  const [applications, setApplications] = useState([]);
  const [list, setList] = useState(dataList);
  const [inputSearch, setInputSearch] = useState('');
  const [resultsFound, setResultsFound] = useState(true);

  const handleSelectCategory = (event, value) =>
        !value ? null : setSelectedCategory(value);
    const handleSelectRating = (event, value) =>
      !value ? null : setSelectedRating(value);

    useEffect(() => {
      const fetchData = async () => {
          const result = await axios.get('http://localhost:5000/api/brand');
          setBrands(result.data);
      }
      fetchData();
  }, []);

    const handleChangeChecked = (brand) => {
      const changeCheckedBrands = brands.map((item) => item.label === brand ? { ...item, checked: !item.checked } : item);
      setBrands(changeCheckedBrands);
    }

    useEffect(() => {
      const fetchData = async () => {
          const result = await axios.get('http://localhost:5000/api/application');
          setApplications(result.data);
      }
      fetchData();
  }, []);

    const handleChangeChecked2 = (application) => {
      const changeCheckedApplications = applications.map((item) => item.label === application ? { ...item, checked: !item.checked } : item);
      setApplications(changeCheckedApplications);
    }


    const handleChangePrice = (event, value) => {
      setSelectedPrice(value);
    }
   
    //FIltering Products
    const applyFilters = async () => {
      //let updateProductList = productsList;
      let updateProductList = await axios.get('http://localhost:5000/api/products');
      let result = updateProductList.data;

      //Rating Filters
      if(selectedRating) {
        result = result.filter((item) => parseInt(item.rating) === parseInt(selectedRating));
      }

      //Category Filters
      if (selectedCategory) {
        result = result.filter((item) => item.category === selectedCategory);
      }

      // Brand Filters
      const brandChecked = brands.filter((item) => item.checked).map((item) => item.label.toLowerCase());

      if (brandChecked.length) {
        result = result.filter((item) => brandChecked.includes(item.brand));
      }
      // Application Filters
      const applicationChecked = applications.filter((item) => item.checked).map((item) => item.label.toLowerCase());

      if (applicationChecked.length) {
        result = result.filter((item) => applicationChecked.includes(item.application));
      }

      // Price Filter
      const minPrice = selectedPrice[0];
      const maxPrice = selectedPrice[1];

      result = result.filter((item) => item.price >= minPrice && item.price <= maxPrice);

      // Search Filter
      if (inputSearch) {
        result = result.filter((item) => item.title.toLowerCase().search(inputSearch.toLowerCase().trim()) !== -1);
      }

      setList(result);

      !result.length ? setResultsFound(false) : setResultsFound(true);
    }

    useEffect(() => {
      applyFilters();
    }, [selectedRating, selectedCategory, brands, selectedPrice, inputSearch, applications]);
    

//-----------------------------------------
/*const [productss,setProducts]= useState([]);
useEffect(() => {
  const getProducts = async () => {
    try {
      const res = await axios.get(
        cat
          ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products"
      );
      setProducts(res.data);
    } catch (err) {}
  };
  getProducts();
}, []);

  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const [selectedCategory, setSelectedCategory]= useState(null);
  const [selectedRating, setSelectedRating]= useState(null);
  const handleSelectCategory=(event,value)=>!value?null:setSelectedCategory(value);
  const handleSelectRating=(event,value)=>!value?null:setSelectedRating(value);
  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState('');

const applyFilters = () => {
    let updatedList = dataList;

  // Search Filter
  if (searchInput) {
    updatedList = updatedList.filter(
      (item) =>
        item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
        -1
    );
  }
  setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
};

*/

return (
  <div className='h-container'>
     
    <Navbar />
      <br/>
      <Na/>
    <Search value={inputSearch} changeInput={(e) => setInputSearch(e.target.value)} />
      <br/>
      <div className="h-row">
          <div className="h-col">
              <Filter selectedCategory={selectedCategory} selectToggle={handleSelectCategory} selectedRating={selectedRating} selectRating={handleSelectRating} brands={brands} changeChecked={handleChangeChecked} selectedPrice={selectedPrice} changePrice={handleChangePrice} applications={applications} changeChecked2={handleChangeChecked2} />
          </div>
          <div className="h-col">
              {resultsFound ? <List list={list} /> : <Empty />}
          </div>
      </div>
     
     
  </div>
)
}

export default Products1;
