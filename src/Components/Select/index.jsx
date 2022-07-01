import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { Container } from "./style";

const Select = ({ data }) => {
  const [category, setCategory] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/api/category").then((res) => {
      setCategory(res.data);
    });
  }, [data]);

  const onFilter = ({ target }) => {
    setFilterCategory(target.value);
  };

  useEffect(() => {
    data(filterCategory);
  }, [filterCategory, data]);

  return (
    <Container>
      <select onChange={(e) => onFilter(e)}>
        {category.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default memo(Select);
