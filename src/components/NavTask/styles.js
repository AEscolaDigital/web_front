import styled from "styled-components";

export const Container = styled.div`
    position: fixed; 
    left: 0px;
    top: 50px;

    z-index: 10;

    width: 400px;
    height: calc(100vh - 50px);

    padding-top: 40px;

    background-color: white;

    #containerImage{
        width: 170px;
        height: 155px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(226, 228, 242, 0.7);

        border-radius: 100%;

        margin-left: 100px;
        margin-bottom: 45px;

        img{
            width: 140px;
            height: 145px;
            
        }
    }

    #title{
        color: var(--color-text) ;
        font-size: 24px;
        font-weight: bold;
        margin-left: 100px;

    }
`;

export const ContainerClass = styled.div`
    overflow-y: auto;
    max-height: 450px;
    padding-bottom: 300px;

    @media (min-width: 1700px) {
        max-height: 500px;
        padding-bottom: 200px;


    }
    #titleDiscipline {
        width: 100%;
        height: 42px;

        display: flex;
        justify-content: start;
        align-items: center;

        margin-top: 45px;
    
        background-color: rgba(226, 228, 242, 0.7);
        span{
            font-size: 18px;
            color: var(--color-text);
            font-weight: bold;
            margin-left: 100px;
        }
    }

    #disciplines{
        display: grid;
        margin-top: 20px;
        margin-left: 80px;

        color: var(--color-text);
        font-weight: 600;
        list-style: none;

        cursor: pointer;

        
        div{
            display: flex;
            align-items: center;

            height: 40px;

            padding-left: 20px;

            :hover {
                background-color: var(--color-background);
            } 
        }
    }

`;