import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: grid;
  padding: 20px;
  background-color: lightgrey;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: 1fr;
  grid-gap: 10px;
`;

export const Label = styled.label`
  padding: 4px;
  border-bottom: 1px solid darkgray;
`;

export const InputTitle = styled.p`
  color: #212121;
  margin-bottom: 8px;
  font-size: 12px;
`;

export const Input = styled.input`
  border: none;
  font-size: 20px;
  background: none;
  color: #212121;
`;

export const Submit = styled.button`
  position: absolute;
  bottom: calc(100% + 12px);
  right: 0;
  width: 50px;
  height: 50px;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  margin-right: 16px;

  & svg {
    width: 30px;
    height: 30px;
  }
`;
