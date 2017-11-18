import { injectGlobal } from "styled-components";

injectGlobal`

  * {
    box-sizing: border-box;
  }
  body {
    background: #7F5D80;
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
