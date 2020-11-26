import styled from "styled-components";

export const StyledButton = styled.button`
  z-index: 1;
  font-family: inherit;
  color: #ffd500;
  font-size: 1em;
  padding: 0.5em 1em;
  outline: none;
  border:1px solid #ffd500;
  border-radius: 7px;
  background-color: transparent;

  :hover {
    cursor: pointer;
    animation: jelly 0.5s;
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
