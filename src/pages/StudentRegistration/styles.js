import styled from "styled-components";

export const Container = styled.div`
    max-width : 1300px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "header header"  
                        "DivImage DivDados ";
    
`

export const DivHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-area: header;
    #divTextAluno{
       margin-left: 300px;
    }
    h1{
        color: var(--color-text);
        font-size: 22px;
        font-weight: 600;
        padding-top: 80px;
        margin-left: -70px;
    }
    h2{
        color: var(--color-text);
        font-size: 18px;
        font-weight: 400;
        padding-top:70px ;
    }
`

export const DivImage = styled.div`
    grid-area: DivImage;
        img {
            width: 800px;
            margin-left: -100px;
            margin-top: 100px;   
        } 
`

export const DivDados = styled.form`
    width: 500px;
    grid-area: DivDados;
    
  
    >div{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    div>div> p {
        margin-top: 15px;
        margin-bottom: 5px;
        text-align: center;
    }
        
    #uploadResidencia{
        align-items: center;
        margin-left: 160px;
    }
`

export const DivBtn = styled.div`
       display: grid;
       grid-template-columns: 1fr 1fr;
       padding: 20px;
       margin-top: 50px;
       
       >div{
           margin-left: 270px;
       }
`

export const DivGenreText = styled.div`
    margin-top: 20px;
    margin-left: 170px;

`

export const DivGenre = styled.div`
   margin-left: 100px;
  
  
`