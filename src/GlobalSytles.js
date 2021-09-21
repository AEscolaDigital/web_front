import { createGlobalStyle } from "styled-components";


export const GlobalSyles = createGlobalStyle`
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;1,400&display=swap');


      :root{
          --color-blue-gradient: linear-gradient(180deg, #5059c9 50%, #7b83eb 100%);
          --color-blue: #5059c9;
          --modal-overlay-color: rgba(37, 36, 35, 0.5);
          --color-text: #5c5c5c;
          --color-houver: rgba(242, 242, 242, 0.4);
          --color-background: #ededed;
          --color-placeholder: #a8a8a8;
      }

      *{
          margin: 0;
          padding: 0;
          outline: 0;

          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
      }

      body{
       background-color: #EDEDED;
     }
`;
