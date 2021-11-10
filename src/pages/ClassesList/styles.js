import styled from "styled-components";

export const Container = styled.div`

>div{
    width:1050px;
    height:800px;
    color: var(--color-text);
    margin-left:60vh;
    margin-top:10vh;

    >div:nth-child(1){
       float:left;
       padding-left:50px; 
    }
    >div:nth-child(2){
        float:left; 
        padding-left:130px; 
    }
    >div:nth-child(3){
        display: flex;
        padding-left:130px; 
    }
    >div:nth-child(5){
        width:800px;
        height:510px;
        
        margin-left:70px;
        margin-top:50px;
        background:white;
        >div{
            width:100%;
            height:400px;
            margin-top:-350px;
            color: var(--color-text);
            display:flex;
            padding-top:15px;
            >div:nth-child(1){
               margin-left:30px;
            }
            >div:nth-child(2){
               margin-left:50vh;
            }
            >div:nth-child(3){
              margin-left:10vh;
            }
        }
    }
} 
`
export const ContainerTable = styled.div`

    width: 400px;
    margin: auto;
    tbody{
        tr{
            display: grid;
            align-items: center;
            grid-template-columns: 100px 420px 150px 300px;
            height: 60px;
            margin-top:15px;
            text-align: start;
            padding-left: 30px;
            font-size: 16px;
            font-weight: bolder;
            color: var(--color-text);
            img{
                width: 40px;
                height: 40px;
            }
        } 
    } 
`