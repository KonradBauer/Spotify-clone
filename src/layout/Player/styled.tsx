import styled from "styled-components";

export const LeftContent = styled.div`
  display: flex;
`;

export const CenterContent = styled.div`
  display: flex;
  color: ${({ theme }) => theme.color.white};
  align-items: center;
  gap: 30px;
`;

export const RightContent = styled.div`
  display: flex;
`;
