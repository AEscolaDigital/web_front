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

        >img{
            width: 132px;
            height: 132px;

            border-radius: 100%;
            box-shadow: 0px 1px 5px 0px rgb(0 0 0 / 50%);
        }

        >div:nth-child(3){
            margin-top: 20px;
            text-align: center;
        
            >div{
                font-size: 20px;
                font-weight: 600;
                color: var(--color-text);
            }

            >span{
                font-size: 14px;
                color: #9F9F9F;
            }
        }

    }
`
