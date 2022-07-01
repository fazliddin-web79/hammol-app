import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, TitleImg } from "./style";

export const Product = () => {
  const [data, setData] = useState([]);
  const [titleImg, setTitleImg] = useState();
  const params = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/product/${params.id}`).then((res) => {
      setData(res.data);
      setTitleImg(res.data.thumbnail);
    });
  }, [params.id]);
  console.log(data, "data");
  return (
    <Container>
      <Container.Left>
        <div>
          {data.images?.map((item, index) => {
            return (
              <img
                onClick={() => setTitleImg(item)}
                key={index}
                src={item}
                alt=""
              />
            );
          })}
        </div>
        <TitleImg src={titleImg} alt="" />
      </Container.Left>
      <Container.Right>
        <h1>Title: {data.title}</h1>
        <h2>Brand: {data.brand}</h2>
        <p>Description: {data.description}</p>
        <p>Rank: {data.rating}</p>
        <h3>Price: {data.price}</h3>
        <h3>Stock: {data.stock}</h3>
      </Container.Right>
    </Container>
  );
};

export default Product;
