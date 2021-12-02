import styled from "styled-components";

export const ContainerTask = styled.div`

     width: 844px;
     
     margin-top: 50px;
     margin-left: calc(50vw - 270px);

     padding-bottom: 150px;

     @media (min-width: 1800px){
          width: 1000px;
          margin-left: calc(50vw - 320px);
     }

     section {
          display: flex;
          justify-content: end;
          margin-top: 70px;
          margin-left: 80px;

          border-bottom:  1px solid  #C4C4C4;

          button{
               height: 50px;

               border: 0;
               border-radius: 10px;

               margin-bottom: 10px;
          }

          #addNewTasks{
               display: flex;
               align-items: center;
               justify-content: center;

               width: 330px;
               height: 50px;

               background-color: var(--color-blue);

               color: white;
               font-size: 18px;
               font-weight: bold;

               border-radius: 10px;

               margin-bottom: 10px;

               cursor: pointer;

          }
     }

     #nameDiscipline{
          font-size: 18px;
          font-weight: bold;
          color: var(--color-text);

          margin-top: 20px;
          margin-left: 72px;
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

     button{
          border: 0;
     }

     form{
          margin-top: 35px;
     }

     @media (min-width: 1800px){
          margin-left: 5vw;
     }

     form>button>div{

       width: 788px;
       height: 96px;
       background: white;
       border-radius: 10px;

       padding-left: 45px;
       padding-right: 40px;
       
       margin-left: 80px;
       margin-top: 30px;
       display: grid;
       grid-template-columns: 130px 361px 222px;
       align-items: center;

       cursor: pointer;
              
     }

       .textListTask{
            color: var(--color-text);
            font-size: 18px;
            font-weight: bold;
       }

       .dateTask{
            border: 2px solid var(--color-blue);
            border-radius: 10px;
            text-align: center;

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


