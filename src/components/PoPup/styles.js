import styled from "styled-components";

export const Container = styled.div`
    width: 230px;
    height: 112px;

    background-color: white;
    box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 50%);

    border-radius: 10px;

    position:absolute;
    z-index: 10;
    
    padding: 5px 10px 35px 10px;

    >div{
        display: flex;
        flex-direction: column;
        row-gap: 5px;
    }

    >div>div{
        width: 215px;
        height: 40px;

        display: flex;
        align-items: center;
        column-gap: 20px;

        >img{
            margin-left: 5px;
        }

        :hover{
            background-color: #EDEDED;
            border-radius: 10px;
            cursor: pointer;
        }
    }

`;