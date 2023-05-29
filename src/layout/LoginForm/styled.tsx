import styled from "styled-components";
import { ReactComponent as Logo } from "../../common/images/logo.svg";

export const Container = styled.div`
  width: 60%;
  height: 100%;
  background: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;
export const StyledLogo = styled(Logo)`
  color: ${({ theme }) => theme.color.black};
  width: 100%;
  margin-top: 20px;
`;
export const Line = styled.span`
  border: 1px solid;
  width: 100%;
  margin-top: 20px;
  color: ${({ theme }) => theme.color.nobel};
`;
export const LogInButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  letter-spacing: 1.5px;
  margin-top: 150px;
  width: 400px;
  height: 50px;
  background: ${({ theme }) => theme.color.malachite};
  color: ${({ theme }) => theme.color.black};
  border-radius: 100px;
  border: none;
  transition: 0.1s;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.99);
  }
`;
