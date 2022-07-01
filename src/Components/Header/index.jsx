import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "./style";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <h1 onClick={() => navigate("/")}>Hammol APP</h1>
      </Container>
      <Outlet />
    </>
  );
};

export default Header;
