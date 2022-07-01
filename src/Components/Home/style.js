import styled from "styled-components";

export const Container = styled.div``;

export const Controls = styled.div`
  margin: 15px auto;
  width: 800px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 550px) {
    flex-direction: column;
    width: 90%;
  }
`;

Controls.InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
Controls.Input = styled.input`
  font-size: 28px;
  outline: none;
  border: none;
  padding-left: 15px;
  border-radius: 5px;
`;
Controls.Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  margin-left: 15px;
  background: #ffffff;
  border-radius: 5px;
  border: none;
  user-select: none;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;
