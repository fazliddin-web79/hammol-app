import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  margin: 30px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Container.Left = styled.div`
  display: flex;
  justify-content: flex-start;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    img {
      margin: 5px;
      height: 20%;
      width: 80px;
      cursor: pointer;
    }
  }
`;
Container.Right = styled.div`
  margin-left: 20px;
`;

export const TitleImg = styled.img`
  height: 350px;
  width: 500px;
`;
