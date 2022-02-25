import styled from "styled-components";

export const SimpleButton = styled.button`
  background-color: #5BBA68;
  border-radius: 12px;
  border: none;
  font-weight: 600;
  font-size: 24px;
  color: white;
  padding: 10px 52px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 375px) {
    font-size: 18px;
    padding: 10px 26px;
  }
`;
