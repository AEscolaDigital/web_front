import styled from "styled-components";

export const Container = styled.header`
    width:  calc(100vw - 50px);
    height: 50px;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > div:nth-child(2) {
       position: relative;
       width: 455px;

        > button {
            position: absolute;
            top: 0;
            left: 0;

            height: 36px;

            z-index: 10;
        
            border: none;
            background: transparent;
            outline: none;

            display: flex;
            align-items: center;

            margin-left: 15px;
        }
    }

    input{
        width: 455px;
        height: 36px;

        border-radius: 50px;
        border: none;

        text-indent: 80px;
        color: #a8a8a8;

        font-size: 18px;
        font-weight: 400;
    }

    input:focus{
        border: 2px solid var(--color-blue);
        transition: all 100ms;
    }
`;

export const Card = styled.div`
    position: absolute;
    right: 30px;
    top: 55px;

    width: 360px;
    height: 365px;

    background-color: white;
    color: var(--color-text);

    border-radius: 10px;

    /* transition: height 0.9s, opacity 0.2s; */
    transition: height 500ms;
    
    >div{
        
    }


`;