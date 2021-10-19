import styled from "styled-components";

export const Container = styled.div`
`
export const ContainerTask = styled.div`

     width: 650px;
     height: 25vw;
     
     margin-top: 60px;
     margin-left: 530px;
     border-radius: 20px 0px 0px 0px;
     background-color: #fff;
     
     
     
     display: grid;
     grid-template-columns: 60px 60px;
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

     div{
          width: 400px;
          height: 30px;
          
          background: var(--color-background);
          padding-top: 5px;
          padding-left: 10px;
     }
    
`

export const DeliveryTask = styled.div`
     width: 700px;
     height: 25vw;
     
     margin-left: 590px;
     border-radius: 0px 20px 0px 0px;
     background-color: #fff;


     div{
          justify-content: right;
          display: flex;
          padding-right: 40px;
          color: var(--color-text);
          font-weight: 700;
          
     }

`

export const ContainerComent = styled.nav`
     color: var(--color-text);
     font-weight: 600;
     padding-top: 20px;
     padding-bottom: 120px;
     line-height: 40px;


`

export const ContainerBtn = styled.div`
     padding-top: 40px;
     justify-content: right;
     padding-right: 40px;
     padding-bottom: 10px;
     display: flex;

     text-align: center;


`

export const ContainerGlobal1 = styled.div`
     padding-top: 20px; 
    
`


export const ActivityDeliveryContainer = styled.div`
     width: 1350px;
     height: 20vw;
     margin-left: 530px;
     background-color: #fff;
     -webkit-box-shadow: 0px -4px 5px 0px rgba(0,0,0,0.5); 
     box-shadow: 0px -4px 5px 0px rgba(0,0,0,0.5);
     border-radius: 5px 5px 20px 20px;

`

export const ContainerStudentAnexo = styled.div`
     height: 200px;
     width: 200px;

     margin-top: 10px;
     margin-left: 30px;

     display: grid;
     grid-template-columns: 500px 200px;
     align-items: center;

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

