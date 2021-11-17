import styled from "styled-components";



export const Section = styled.section`
    margin-top: calc(50vh - 200px);
    margin-left: calc(50vw - 310px);
    
    display: flex;

    a>div{
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

    a:nth-child(2){
            margin-left: 100px;
    }
`
