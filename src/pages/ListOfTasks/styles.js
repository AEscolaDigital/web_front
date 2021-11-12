import styled from "styled-components";

export const ContainerTask = styled.div`

     width: 844px;
     
     margin-top: 50px;
     margin-left: calc(50vw - 270px);

     padding-bottom: 150px;
  
     section {
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
               height: 30px;

               font-weight: bold;
               font-size: 16px;

               color: #5C5C5C;
          }
     }
    
`

export const ContainerSelectionDiscipline = styled.div`
     display: flex;
     align-items: center;
     flex-direction: column;

     margin-top: calc(50vh - 257px);

     >img{
          display: block;
          
          width: 500px;
          height: 300px;

          margin-bottom: 50px;
     }

     >span{
          margin-top: 10px;

          font-size: 18px;
          font-weight: bold;
          color: var(--color-text);
     }


`
export const ContainerListTask = styled.div`

     >div{

       width: 788px;
       height: 96px;
       background: white;
       border-radius: 10px;

       padding-left: 45px;
       padding-right: 40px;

       margin-left: 80px;
       margin-top: 35px;

       display: grid;
       grid-template-columns: 130px 361px 222px;
       align-items: center;
              
     }

       .textListTask{
            color: var(--color-text);
            font-size: 18px;
            font-weight: bold;
       }

       .dateTask{
            border: 2px solid var(--color-blue);
            border-radius: 10px;

            >div{
                 display: flex;
                 flex-direction: column;
                 padding: 10px 20px 14px 20px;

                 >span{
                      color: var(--color-text);
                      font-size: 18px;
                      font-weight: bold;

                 }
            }
       }
`


