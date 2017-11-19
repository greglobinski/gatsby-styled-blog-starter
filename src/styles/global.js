import { injectGlobal } from "styled-components";

injectGlobal`

  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  body {
    font-family: "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-seriff";
  }
  
  *::-webkit-scrollbar {
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    background: #eee;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }

  [data-whatintent="mouse"] *:focus {
    outline: none;
  }
`;
