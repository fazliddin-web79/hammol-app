import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 550px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const Tab = styled.div``;
