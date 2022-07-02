import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import Body from "../Body";
import Select from "../Select";
import { useDispatch } from "react-redux";
import { Container, Controls } from "./style";
import { getCategory } from "../../Redux/Category";

export const Home = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [select, setSelect] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory());
    axios.get("http://localhost:3001/api/product").then((res) => {
      setData(res.data.products);
    });
  }, [dispatch]);

  const filter = useCallback((category) => {
    axios
      .get(`http://localhost:3001/api/product?category=${category}`)
      .then((res) => {
        setData(res.data.products);
      });
    setName("");
    setSelect(category);
  }, []);

  const onFilter = () => {
    if (select === "") {
      console.log(select);
      axios
        .get(`http://localhost:3001/api/product?name=${name}&limit=10&offset=0`)
        .then((res) => {
          setData(res.data.products);
        });
    } else {
      console.log(select);
      axios
        .get(
          `http://localhost:3001/api/product?name=${name}&category=${select}`
        )
        .then((res) => {
          setData(res.data.products);
        });
    }
  };
  return (
    <Container>
      <Controls>
        <Controls.InputWrap>
          <Controls.Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"enter the name . . ."}
          />{" "}
          <Controls.Btn onClick={onFilter}>Search</Controls.Btn>
        </Controls.InputWrap>
        <Select data={filter} />
      </Controls>
      <Body value={data} />
    </Container>
  );
};

export default Home;
