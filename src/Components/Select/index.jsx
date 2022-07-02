import React, { memo, useEffect, useState } from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";

const Select = ({ data }) => {
  const [filterCategory, setFilterCategory] = useState("");
  const category = useSelector((store) => store.category.category);

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
