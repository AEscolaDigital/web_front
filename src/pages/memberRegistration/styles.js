import styled from "styled-components";

export const Container = styled.div`
   width: 1440px;
   height: 1600px;
`

export const Cabeçalho = styled.div`
    width: inherit;
    height: 380px;
    margin-top: 50px;
    margin-left: 280px;
    border-radius: 20px 20px 0px 0px;
    background-color: #fff;
    display: flex;
    color: var(--color-text);
   
`

export const CabeçalhoLeft = styled.div`
   
   
   >div{
        margin-top: 25px;
        margin-left: 150px;
        line-height: 30px;
        text-align: center;
   }

   >p{
        text-align: center;
        padding: 20px 0px 20px 140px;  
        
        font-size: 20px;
   }

   >ol{
        padding-left: 60px;
        line-height: 25px;

   }

   >ol >li{
       margin-left: 60px;
       text-decoration: none;
   }

`

export const CabeçalhoRight = styled.div`
    
    align-items: center;
    margin-left: 200px;
    display: flex;
`

export const Body = styled.div`
    width: inherit;
    height: 1220px;
    margin-left: 280px;
    margin-top: 10px;
    background-color: #fff;
    
    box-shadow: 3px -6px 13px -2px rgba(0,0,0,0.35);

`

export const Page = styled.div`
    width: inherit;
    padding-top: 20px; 

    >button{
        height: 30px;
        width: 250px;
        border: none;
        cursor: pointer;
        margin: 0px 200px 0px 250px;
        background-color: #fff;
        color: var(--color-text);
        font-size: 16px;
        font-weight: 600;
    }

    >button:hover{
        cursor: pointer;
        border-bottom: 2px solid var(--color-placeholder);
        
    }

    >div{
        border: 1px solid var(--color-placeholder);
        margin-left: 80px;
        margin-right: 80px; 
    }

`

export const Requisito = styled.div`

    display: flex;
    margin-left: 130px;
    

    >div{
        width: 500px;
        height: 300px;  
    }

    #radioButton{
        display: flex;
        margin-top: 20px;
        
        gap: 10px;
    }

    #fileExcel{
        width: 350px;
        height: 60px;
        border: 2px dashed var(--color-blue);
        text-align: center;
        padding-top: 15px;
        margin-left: 250px;
        margin-top: 40px;
        cursor: pointer;
    }
`

export const DivIcon = styled.div`
    margin-left: 450px;
    margin-top: -60px;
    

`

export const Informacoes = styled.div`
    .line{
        border: 1px solid var(--color-blue);
        margin-left: 120px;
        margin-right: 120px; 
    }

    .titles{
        height: 50px;
        color: var(--color-blue);
        display: flex;
        align-items: center;
        margin-left: 200px;
        gap: 200px;
        font-weight: 600;
    }

    .add{
        height: 50px;
        display: flex;
        align-items: center;
        margin-left: 200px;
        gap: 130px;
        color: var(--color-text);
        font-weight: 600;
    }
`

export const Footer= styled.footer`
    width: inherit;
    height: 50px;
    margin: 0px 120px 0px 120px;
    background-color: var(--color-blue);
    border-radius: 10px;

    display: flex;
    color: #fff;
    align-items: center;
    justify-content: right;
    gap: 40px;
    padding-right: 20px;

`