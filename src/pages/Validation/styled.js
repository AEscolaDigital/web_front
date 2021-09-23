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
     
    >div{
         width: 1120px;
         margin-top: 30px;
         margin-bottom: 15px;
         position: relative;
         

        input:nth-child(1){
            width: 88px;
            height: 40px;
            margin-left: 75px;
        }

        input:nth-child(2){
            width: 393px;
            height: 40px;
            margin: 0 544px 0 20px;
        }
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
         display: block;
         margin-top: 30px;
         width: 1050px;
         height: 45px;
         background-color: #F4F2FF;

         display: flex;
         align-items: center;
         justify-content: center;

        >div:nth-child(1){
             display: grid;
             grid-template-columns: 255px 39px 64px;
             align-items: center;
             height: 15px;

            .divQuantidadeLinhas{
                margin-left: 646px;
                color: #6E6893;
                font-family: Inter;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
            }

            .divQuantidadePaginas{
                margin-left: 40px;
                font-family: Inter;
                font-style: normal;
                font-weight: 600;
                font-size: 12px;
                line-height: 15px;
                color: #6E6893;
            }

            .divImgSetas{
                margin-left: 70px;
            }
        } 
    }
`