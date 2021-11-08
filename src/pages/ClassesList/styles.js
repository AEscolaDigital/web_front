import styled from "styled-components";

export const Container = styled.div`

>div{
    width:1050px;
    height:800px;
    background:red;
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
        height:550px;
        margin-left:140px;
        margin-top:50px;
        background:white;
        
        >div{
            width:100%;
            height:30px;
            background:darkcyan;
            display:flex;
            >div:nth-child(1){
               margin-left:50px;
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