import { injectGlobal } from "styled-components";

injectGlobal`

  * {
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
    -webkit-overflow-scrolling: touch;
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
