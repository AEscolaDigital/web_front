import styled from "styled-components";

export const ContainerTask = styled.div`

     width: 60vw;
     max-width: 880px;
     
     border-radius: 20px 20px 0px 0px;
     background-color: #fff; 

     padding: 20px 60px 50px 50px;

     margin-left: calc(50vw - 212px);

     @media (min-width: 1800px) {
          width: 80vw;
          max-width: 1300px;

          margin-left: calc(50vw - 450px);
     }

     #taskHeader{
          display: flex;
          justify-content: space-between;
     }

     .titulo{
          margin-top: 40px;
          color: var(--color-text);

          >p{
               font-weight: bold;
               margin-bottom: 5px;
          } 

          #nameDisiciplina{
               font-size: 14px;
               color: var(--color-text);
               font-weight: bold;
          }

     }

   
     >div{

          >div{
               margin: 20px 0 25px 0;
          }

          #taskDescription{
               width: 500px;
               display: grid;
               margin-left: 15px;
               label{
                    font-size: 15px;
                    font-weight: bold;
                    color: var(--color-text);
               }

               >textarea{
                    border-radius: 10px;
                    border: 2px solid var(--color-blue);
               }

          }
     }
`

export const ContainerImage = styled.div`
     height: 50px;
     width: 50px;
     border-radius:90px;
     
     margin-left: 30px;
     
     display: grid;
     grid-template-columns: 80px 200px 200px;
`

export const ReferenciaAnexo = styled.div`
     width: 400px;

     #title{
          color: var(--color-text);
          font-size: 18px;
          font-weight: bold; 

          margin-bottom: 15px;
     }

     .subTitle{
          color: var(--color-text);
          font-size: 14px;
          font-weight: bold; 
     }

     .inputs{
          display: flex;
          align-items: center;
          column-gap: 15px;

          margin-top: 15px;

          >div{
               padding: 0px;
          }
          
          input {
               width: 435px;
               height: 35px;

               background-color: #EDEDED;
               border-radius: 5px;
               border: 0px;

               color: var(--color-text);

               padding-left: 10px;
          }

          img{
               width: 20px;
               height: 20px;
               cursor: pointer;
          }
     }

     >div{
          margin-top: 15px;


          >h5{
               font-size:18px;
               color: #5C5C5C;
          }
     }

`

export const ActivityDeliveryContainer = styled.div`

     padding-left: 50px;
     height: auto;

     width: 60vw;
     max-width: 880px;

     margin-bottom: 40px;
     padding-bottom: 40px;
     padding-right: 40px;

     margin-left: calc(50vw - 212px);

     @media (min-width: 1800px) {
          width: 80vw;
          max-width: 1300px;

          margin-left: calc(50vw - 450px);
     }

     background-color: #fff;

     box-shadow: 0px -4px 7px 1px rgba(206, 206, 206, 0.35);
     border-radius: 0px 0px 15px 15px;

     
     #btn{
          display: flex;
          justify-content: end;
     }

`

export const ContainerStudent = styled.div`
     height: 50px;
     width: 50px;
     border-radius:90px;
     
     margin-left: 30px;
     padding-top: 30px;
    
     display: grid;
     grid-template-columns: 70px 180px ;
`

export const ContainerStudentAnexo = styled.div`
     width: 200px;

     
     display: grid;
     grid-template-columns: 500px 200px;

     margin-bottom: 40px;

     #enexos{
          display: flex;
          flex-direction: column;
     }

     #imageAnexo{
          display: flex;
          margin-top: 10px;
          align-items: center;
          gap: 10px;
          color: #9f9f9f;
          font-weight: 700;
          margin: 15px 0 0 100px;
     }

     #pontuacao{
          margin-top: 45px;
     }

`

export const InputFile = styled.div`
     width: 385px;
     height: 35px;

     label {
        display: flex;

        padding-left: 25px;
        padding-top: 7px;
        border-radius: 10px 0px;

        cursor: pointer;

        color: var(--color-text);

    }
    input[type='file']{
        display: none;
    } 

     .files{
         display: flex;
         align-items: center;
         justify-content: space-between;

         background-color: var(--color-background);

         border-radius: 5px;

         height: 35px;

         margin-top: 15px;

         div>label{
              width: 385px;
              padding-bottom: 10px;
         }

          div>img{
              width: 20px;
              height: 20px;

              margin-left: 10px;

              cursor: pointer;
         }
    }

`
export const ContainerBtn = styled.div`
     width: 800px;
     height: 50px;

     display: flex;
     padding-left: 500px;
     margin-top: 30px;
     gap: 50px;

`