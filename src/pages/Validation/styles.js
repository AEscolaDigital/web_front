import styled from "styled-components";

export const Container = styled.div`
    >div{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const DivContainer = styled.div`
     width: 1120px;
     background-color: white;
     border-radius: 8px;
    
     margin: 47px calc(50vw - 620px) 0px auto; 
     padding-bottom: 30px;
`

export const DivSearch = styled.div`
    display: flex;
    column-gap: 20px;

    margin: 30px 0px 20px 50px;

    >button{
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;

        width: 90px;
        height: 40px;

        color: var(--color-text);

        font-size: 16px;
        font-weight: 600;

        border: 2px solid #6D5BD0;
        border-radius: 6px;
    }

    > div:nth-child(2){
        position: relative;
        width: 393px;
    }    
         
    div > button {
        position: absolute;
        top: 2px;
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

    input{
        width: 393px;
        height: 40px;

        border-radius: 10px;
        border: 2px solid #6D5BD0;

        text-indent: 50px;

        color: #a8a8a8;
        font-size: 18px;
        font-weight: 400;


    }
      
`

export const Table = styled.table`
    width: 1020px;
    margin: auto;
    #trTh{
        display: grid;
        grid-template-columns: 255px 170px 170px 170px 105px 180px;
        justify-self: start;
         >th{ 
            display: flex;
            align-items: center;
            text-align: start;
            height: 45px;
         }
    }
    
    th{
      color: #6E6893;
      font-size: 12px;
      font-weight: 600;
              
      border-top:  2px solid #D9D5EC;
      border-bottom:  1px solid #D9D5EC;
      padding-left: 30px;
    }
    tbody{
        width: 1020px;
        tr{
            display: grid;
            grid-template-columns: 255px 170px 170px 170px 205px 50px;
            align-items: center;
            height: 60px;
        
            border-bottom:  1px solid #D9D5EC;
            font-size: 14px;
            font-weight: 600;
            padding-left: 30px;
        }
        tr:nth-child(2n){
            background-color: #F4F2FF;
        }
        .tdSpan{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            min-width: 120px;
            >span:nth-child(2){
                color: #6E6893;
            }
            .pending{
                display: flex;
                align-items: center;
                justify-content: center;
                column-gap: 6px;
                width: 90px;
                height: 18px;
                background-color: #FFE0E0;
                color: #D30000;
                font-size: 12px;
                border-radius: 10px;
                >span:nth-child(1){
                    width: 7px;
                    height: 6px;
                    border-radius: 100%;
                    background-color: #D30000;
                }
            }
            .concluded{
                display: flex;
                align-items: center;
                justify-content: center;
                column-gap: 6px;
                width: 90px;
                height: 18px;
                background-color: #CDFFCD;
                color: #007F00;
                font-size: 12px;
                border-radius: 10px;
                >span:nth-child(1){
                    width: 7px;
                    height: 6px;
                    border-radius: 100%;
                    background-color: #007F00;
                }
            }
        }
    }
    tfoot{
         margin-top: 30px;
         width: 1050px;
         height: 45px;

         display: flex;
         align-items: center;
         justify-content: end;

        >div{
            display: flex;
            column-gap: 40px;

            color: #6E6893; 
            font-size: 12px;
            font-weight: 600;

            margin-right: 50px;

            #divImgSetas>img{
                margin-left: 45px;
            }
        } 
    }
`