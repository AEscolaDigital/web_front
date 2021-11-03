import styled from "styled-components";

export const Container = styled.div`


`

export const Section = styled.section`
    width: 1120px;
    margin-top: 250px;
    margin-left: calc(45vw - 500px) ;
    gap: 100px;
    justify-content: center;
    display: flex;
    

    >div{
        width: 260px;
        height: 250px;
        
        background-color: white;
        border: 1px solid var(--color-blue);
        border-radius: 20px;
        cursor: pointer;
       
        
       

        >img{
            width: 132px;
            height: 132px;

            display: block;
            margin: 20px auto 0px auto;
            border-radius: 100%;
            box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 50%);
            cursor: pointer;
        }

        >p{   
            padding-top: 20px;
            font-size: 20px;
            font-weight: 600;
            text-align: center;
            color: var(--color-text);
            }
    }
`
