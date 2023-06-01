import styled from "styled-components";

export const StyledMain = styled.div`
  display: grid;
  background: linear-gradient(rgb(91, 87, 115), rgba(0, 0, 0, 1));
  grid-area: 1 / 2 / 6 / 6;
  padding: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 30px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
`;

export const LeftSide = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.gray};
  border-radius: 30px;
  align-items: center;
  max-width: 280px;
  min-width: 80px;
  flex-grow: 1;
  padding: 10px;
  height: 30px;
`;

export const RightSide = styled.div`
  display: flex;
  justify-self: flex-end;
  color: ${({ theme }) => theme.color.white};
  gap: 10px;
  margin-left: 20px;
  cursor: pointer;
`;

export const RoundedImage = styled.img`
  border-radius: 50%;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const MainBody = styled.div`
  display: block;
  margin-top: -250px;
  padding: 10px;
`;

export const MainBodyContent = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const ContentInfo = styled.div`
  margin-left: 30px;
  color: ${({ theme }) => theme.color.white};
`;

export const ContentImage = styled.img`
  width: 18vw;
`;

export const BigText = styled.span`
  font-size: 70px;
  flex-wrap: wrap;
`;
