import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.35s linear;
  }
 
  footer {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
  small {
    display: block;
  }
  button {
    display: block;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .thumbnail {
  border-radius: 80%;
  height: 250px;
  width: 250px;
  align-self: center;
  box-shadow: violet 2px 2px 5px;
}
.thumbnail:hover{
  cursor: no-drop;
  padding:10px;
  box-shadow: orange 2px 2px 5px;
}
.mainButton{
  padding: 10px;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
 
}

.mainButton:hover{
  cursor: pointer;
}
.foodCal:hover{
  font-weight:bold;
  cursor: pointer;
}
`;
