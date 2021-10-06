import styled from "styled-components";

export const Container = styled.div`

    #btnCreateTeam{
        display: flex;
        justify-content: end;

        width: 1220px;
        margin: 40px auto 0px auto ;
    
        >a{
            display: flex;
            align-items: center;
            justify-content: center;
            column-gap: 20px;

            width: 200px;
            height: 40px;

            background-color: white;
            border-radius: 10px 0px;

            cursor: pointer;
        }
    }

    #titleYourTeams{
        width: 1000px;
        margin: auto;

        color: var(--color-text);
    }

    #btnModal{
        display: flex;
        column-gap: 30px;
        justify-content: end;

        margin-top: 30px;
    }

    #inputsModal{
        width: 388px;
        margin: auto;
    }
`
export const Section = styled.section`
    width: 1120px;
    margin-top: 30px;
    margin-left: calc(50vw - 500px) ;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    column-gap: 25px;
    row-gap: 30px;

`
