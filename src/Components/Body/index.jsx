import React from "react";
import Card from "../Card";
import { Container } from "./style";

export const Body = ({ value }) => {
  return (
    <>
      <Container>
        {value?.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </Container>
    </>
  );
};

export default Body;
