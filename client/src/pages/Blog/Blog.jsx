import { useEffect, useState } from "react";
import Header from "../../components/header_posts/Header";
import Posts from "../../components/posts/Posts";
import Na from "../../components/navbar/Na";
import styled from "styled-components";
import Navbar from "../../components/Navbar";
import "./blog.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
    
      <br/>
      <Na/>
      <Header />
      <br/>
        <Posts posts={posts} /> 
    </>
  );
}