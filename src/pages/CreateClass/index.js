import { Container, DivTurma, DivImage } from "./style"
import Nav from "../../components/Nav"
import Header from "../../components/Header";

function CreateClass() {
    return(

        <Container>

            <Header />
            <Nav />

            <DivTurma>    
            </DivTurma>

            <DivImage>
            </DivImage>

        </Container>

    );    
}

export default CreateClass;