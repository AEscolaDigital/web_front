import styled from "styled-components";



export const Container = styled.div`
    width: 350px;

    padding-top: 20px;
   
    select{
        width: 300px;
    }

`
export const Input = styled.div`
    width: 320px;
    height: 40px;

    padding-right: 10px;

    border: 2px solid var(--color-blue);

    border-radius: 5px;

    margin: auto;

    display: flex;
    align-items: center;
    justify-content: end;
    column-gap: 10px;

    cursor: pointer;
`


export const ContainerOption = styled.div`    
    transition: height 500ms;
  
    /* position: absolute;
    z-index: 10; */

`

export const ContainerSearch = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 20px;

     >input{
        width: 300px;
        height: 35px;

        border: 1px solid var(--color-blue);
        border-radius: 5px;

     }

`
export const Select = styled.div`
    display: flex;
    flex-direction: column;

    margin: auto;

    hr{
         border: 1px solid var(--color-blue); 
    }

    >span{
        margin-top: 20px;
        margin-bottom: 20px;

        color: var(--color-text);
        font-size: 18px;
        font-weight: 600;
    }

    #option{
        display: flex;
        flex-direction: column;
    }

    div{
        display: flex;
        justify-content: space-between;

        padding-right: 10px;
        padding-left: 10px;

        margin-top: 10px;

        font-size: 16px;
        color: var(--color-text);

        cursor: pointer;

    }


`
