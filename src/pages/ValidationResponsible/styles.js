import styled from "styled-components";


export const Container = styled.div`
    max-width: 1300px;
    margin: auto;

    display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: " Header header "  
                            " DivValidationLeft DivValidationRight" ;

    >img {
        margin-left: 450px;
        margin-top: 20px;
    }
`

export const DivHeader = styled.div`
   grid-area: Header;
   
    h1{
        padding-top: 40px;
        padding-bottom: 20px;
        padding-left: 30px;
    }   
    
  
`

export const DivInputFile = styled.div`
    padding-left: 20px;
  
`

export const DivValidationLeft = styled.div`
  grid-area: DivValidationLeft;
  margin-top: -20px;


`

export const DivValidationRight = styled.div`
    grid-area: DivValidationRight;
    
    margin-top: -20px;  
      
    >div{
        display: grid;
        grid-template-columns: 1fr 1fr;
        
    }

`

export const DivBtn = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    
    margin-left: 300px;
    margin-top: 40px;
    

`

