import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: palevioletred;
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background: none;
  padding: 0;

  & svg {
    width: 30px;
    height: 30px;
  }
`;
