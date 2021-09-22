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
    
     margin: 47px 0px 0px 246px;

     padding-bottom: 30px;

    .divInputs{
        width: 100%;
        height: 80px;
        margin-top: 30px;

        .inputBarraPesquisa{
            width: 393px;
            height: 40px;
            margin-right: 544px;
            margin-left: 20px;
        }

        .inputFilter{
            width: 88px;
            height: 40px;
            margin-left: 75px;
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
        height: 44px;

        background-color: #F4F2FF;

    }
`
