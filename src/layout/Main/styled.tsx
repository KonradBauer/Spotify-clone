import styled from "styled-components";

export const StyledMain = styled.div`
  display: grid;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  grid-area: 1 / 2 / 6 / 6;
  padding: 20px;
`;

export const Header = styled.div``;

export const Input = styled.input`
  border: none;
  outline: none;
`;

export const LeftSide = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.gray};
  border-radius: 30px;
  align-items: center;
  justify-content: flex-start;
  max-width: 250px;
  padding: 10px;
  height: 30px;
`;

export const RightSide = styled.div``;
