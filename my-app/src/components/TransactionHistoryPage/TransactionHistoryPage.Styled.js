import styled from "styled-components";

export const List = styled.ul`
  min-height: 500px;
  background-color: lightgrey;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  gap: 8px;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DateContainer = styled.p`
  display: flex;
  gap: 8px;
  margin-bottom: 4px;
`;

export const Summary = styled.p`
  margin-bottom: 4px;
`;

export const Currency = styled.p`
  margin-bottom: 4px;
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
