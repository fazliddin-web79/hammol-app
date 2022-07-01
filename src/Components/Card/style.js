import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #30363d;
  height: 450px;
  width: 350px;
  margin: 15px 20px;
  background-color: #d7d7d7;
  :hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px 5px rgba(1, 1, 1, 0.4);
  }
  img {
    width: 350px;
    height: 200px;
  }

  button {
    cursor: pointer;
    background-color: bisque;
    border: 2px solid #30363d;
    padding: 5px 10px;
    margin-top: 15px;
    :active {
      transform: scale(0.98);
    }
  }
`;
Container.Wrap = styled.div`
  margin: 10px 20px;
`;

Container.Text = styled.span`
  display: inline-block;
  font-size: 42px;
  color: blue;
`;
