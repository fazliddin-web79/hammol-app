import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export const Card = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <img src={item.thumbnail} alt="" />
      <Container.Wrap>
        <h1>
          <Container.Text>Title:</Container.Text> {item.title}
        </h1>
        <h2>Brand: {item.brand}</h2>
        <p>Description: {item.description}</p>
        <button onClick={() => navigate(`/item/${item.id}`)}>
          Show product
        </button>
      </Container.Wrap>
    </Container>
  );
};

export default Card;
