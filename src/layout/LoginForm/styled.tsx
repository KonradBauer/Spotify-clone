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
  color: ${({ theme }) => theme.color.black}
  width: 150px;
  height: 70px;
  margin-top: 20px;
`;

export const Line = styled.span`
  border: 1px solid;
  width: 100%;
  margin-top: 20px;
  color: ${({ theme }) => theme.color.nobel};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 100px;
  width: 500px;
  height: 200px;
  border: 6px solid rgba(209, 213, 218, 0.1);
  border-radius: 5px;
  box-shadow: 8px 7px 23px -3px rgba(66, 68, 90, 1);
`;
export const Label = styled.label`
  font-weight: bold;
  font-size: 15px;
`;
export const Input = styled.input`
  font-weight: bold;
  font-size: 20px;
  width: 400px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
`;

export const LogInButton = styled.button`
  margin-top: 50px;
  width: 400px;
  height: 50px;
  background: ${({ theme }) => theme.color.malachite};
  color: ${({ theme }) => theme.color.black};
  border-radius: 50px;
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
