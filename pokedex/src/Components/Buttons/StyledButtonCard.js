import styled from "styled-components";

export const StyledButtonCard = styled.button`
  z-index: 1;
  font-size: 0.7em;
  padding: 0.5em;
  outline: none;
  border-radius: 10px;
  font-family: 'Press Start 2P', cursive;
  background-color: #DC3545;

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
