import { Container, ContainerCreateClass  } from "./styles";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";


function CreateClass() {
    return (
        <Container>

            <Header />
            <Nav /> 
            
            <ContainerCreateClass>
                <div id="inputCreateClass" >
                    <h1>Criar uma Turma</h1>
                    <Input label="Nome da turma" />
                    <BtnSubmit text="Criar" />
                </div>
                
            </ContainerCreateClass>

        </Container>

    );
}

export default CreateClass;