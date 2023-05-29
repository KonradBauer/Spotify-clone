import styled from "styled-components";

export const LeftContent = styled.div`
  display: flex;
`;

export const CenterContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  align-items: center;
  justify-content: space-between;
  width: 300px;
  padding: 0 20px;
`;

export const RightContent = styled.div`
  display: flex;
`;
