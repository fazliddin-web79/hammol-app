import styled from "styled-components";

export const Container = styled.div`
  @media (max-width: 550px) {
    margin-top: 25px;
    display: flex;
    justify-content: center;
  }
  select {
    border-radius: 5px;
    font-size: 24px;
    outline: none;
    border: none;
    padding: 5px;
  }
`;
