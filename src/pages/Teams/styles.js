import styled from "styled-components";

export const Container = styled.div`

` 
export const Section = styled.section`
    width: 1120px;

    margin-top: 50px;
    margin-left: calc(50vw - 500px) ;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 25px;
    row-gap: 30px;

    >div{
        width: 260px;
        height: 250px;
        
        background-color: white;

        border-radius: 20px;

        >img{
            display: block;
            margin: -25px auto 0px auto;
        }

        >div:nth-child(1){
            margin: 10px 0px  0px 215px;
        }
    }
` 