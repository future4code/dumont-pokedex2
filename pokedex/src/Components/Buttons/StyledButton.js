import styled from "styled-components";

export const StyledButton = styled.button`
  z-index: 1;
  font-family: inherit;
  color: #007bff;
  font-size: 2em;
  padding: 0px 15px 10px 15px;
  outline: none;
  border:1px solid #ffd500;
  border-radius: 20px;
  background-color: #ffd500;
  
  :hover {
    cursor: pointer;
    animation: jelly 0.5s;
    color: #ffd500;
    background-color: transparent;
  }

  @keyframes jelly {
    0%,
    100% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(0.9, 1.1);
    }
    50% {
      transform: scale(1.1, 0.9);
    }
    75% {
      transform: scale(0.95, 1.05);
    }
  }

  :focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 
`;
