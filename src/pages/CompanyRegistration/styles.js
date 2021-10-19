import styled from "styled-components";


export const Container = styled.div`

     overflow-x: hidden;
    
    

`
export const DivHeader = styled.div`

    div{
        margin:80px 0 0 20vh;
        
        h1 {
        color: var(--color-text);
         font-size:22px;
        }
    }
    div:nth-child(2){
        margin:100px 0 0 20vh;
        h3{
            color:5C5C5C;
            font-size:18px;
        }
    }
`
export const InputRegistros = styled.div`

    >div{
        margin:25px 0 0 18vh;
       >.endereco{
           margin:35px 0 25px 15px;
            display: inline-block;
       }
    }

    >div:nth-child(2){
       position:relative;
       left:35%;
       bottom:100vh;
      display: inline-block;
    }

    >div:nth-child(3){
    }

`

