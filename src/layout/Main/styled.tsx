import styled from "styled-components";

export const StyledMain = styled.div`
  display: grid;
  background: ${({ theme }) => theme.color.codGray};
  grid-area: 1 / 2 / 6 / 6;
`;
export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
  padding: 30px;
`;

export const H2 = styled.div`
  display: flex;
  width: 100%;
  height: 10px;
  padding: 0;
  color: ${({ theme }) => theme.color.white};
`;
