import styled from "styled-components";

export const ContainerTask = styled.div`

     width: 55vw;
     max-width: 880px;
     
     border-radius: 20px 20px 0px 0px;
     background-color: #fff;
     padding-top: 20px;   

     margin-left: calc(50vw - 210px);

     .titulo{
          margin: 40px 0 0 80px;
          color: var(--color-text);

          >p{
               font-weight:bold;
          }
     }

     >div{
          margin:10px 0 0 60px;

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

export const ContainerTexts = styled.div`
     width: 300px;
     height: 50px;
     margin-left: 110px;
`


export const MateriaisReferencias = styled.div`
     width: 300px;
     height: 250px;
     
     margin-left: 110px;
     margin-top: 20px;

     div{
          margin-top: 20px;
          margin-bottom: 20px;
          color: blue;
     }
`

export const ReferenciaAnexo = styled.div`
     width: 350px;
     height: 100px;
     margin-left: 110px;

     >div{
          margin: 30px 0 0 0;


          >h5{
               font-size:18px;
               color:5C5C5C;
          }
     }

     div:nth-child(2){
          width: 435px;
          height: 30px;
          background: var(--color-background);
          padding-top: 5px;
          padding-left: 10px;
          margin: 30px 0 0 0;
          
         >div{
               position:relative;
               left:41vh;
               bottom:18px;
               display:inline;   

         }
     }
    
`

export const ActivityDeliveryContainer = styled.div`
     width: 1350px;
     height: 15vw;
     margin-left: 530px;
     background-color: #fff;
     -webkit-box-shadow: 0px -4px 5px 0px rgba(0,0,0,0.5); 
     box-shadow: 0px -4px 5px 0px rgba(0,0,0,0.5);
     border-radius: 5px 5px 20px 20px;

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
     height: 200px;
     width: 200px;
     margin-top: 50px;
     margin-left: 30px;
     display: grid;
     grid-template-columns: 500px 200px;

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

export const Divs = styled.div`
     width: 400px;
     height: 40px;
     background: var(--color-background);
     padding-left: 10px; 
     padding-top: 10px;
     margin-top: 10px;
`

export const ContainerBtn= styled.div`
     width: 800px;
     height: 50px;

     display: flex;
     padding-left: 500px;
     margin-top: 30px;
     gap: 50px;

`