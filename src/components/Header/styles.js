import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: calc(100vw - 50px);
    height: 50px;

    margin: auto;

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

        background-color: white;
    }

    input:focus{
        border: 2px solid var(--color-blue);
        transition: all 100ms;
    }

    img{
        cursor: pointer;
    }

    #profilePicture{
        cursor: pointer;
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
    transition: height 500ms;
    
    >div{
        
        >img{
            display: block;
            margin: 15px auto 10px auto;
        }

        >div{
            text-align: center;
        }
        >div:nth-child(2){
            font-size: 18px;
        }
        >div:nth-child(3){ 
            font-size: 14px;
            color: #9F9F9F;
        }
        hr{
            width: 300px;
            border: 1px solid #9F9F9F;
            margin: 15px auto 20px auto;
        }
        a{
            display: flex;
            align-items: center;
            column-gap: 30px;

            margin: 10px 0px 0px 15px;

            font-size: 14px;
            color: var(--text-color);

            padding-top: 1px;
            padding-left: 15px;
        
            :hover{
                width: 320px;
                border-radius: 5px;
                background-color: var(--color-background);
            }
        }
    }
`;