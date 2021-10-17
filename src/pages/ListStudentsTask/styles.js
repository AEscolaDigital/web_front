import styled from "styled-components";

export const Container = styled.div`
`
export const ContainerTask = styled.div`

     width: 844px;
     height: 80vw;
     
     margin-top: 50px;
     margin-left: 505px;
  
     header {
          display: grid;
          grid-template-columns: 300px 100px 100px;
          justify-self: start;
          margin-top: 70px;
          margin-left: 80px;

          border-bottom:  1px solid  #C4C4C4;;
     
          div > span{
               display: flex;
               align-items: center;
               text-align: start;
               height: 45px;

               font-family: Montserrat;
               font-style: normal;
               font-weight: bold;
               font-size: 16px;

               color: #5C5C5C;
          }
     }

     body {
          width: 788px;
          height: 90px;
          display: flex;
          align-items: center;
          margin-left: 80px;
          margin-top: 35px;
          background-color: #FFFFFF;

          div > img {
               margin-left: 50px;
          }

          div > span {
               margin-left: 60px;
               font-family: Montserrat;
               font-style: normal;
               font-weight: bold;
               font-size: 18px;

               color: #5C5C5C;
          }

          div:nth-child(3) {
               width: 222px;
               height: 71px;
               border: 1px solid #5059C9;
               box-sizing: border-box;
               border-radius: 10px;
               margin-left: 132px;

               div > span {
                    list-style: none;
                    padding-top: 10px;
                    margin-left: 22px;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 21px;

                    color: #5C5C5C;
               }
          }
     }
`


