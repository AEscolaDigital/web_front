import { Container, DivImage, DivDados, DivHeader } from "./styles"
import cadastro from "../../assets/studentRegister/registro 1.svg"
import Input from "../../components/Input"


function StudentRegister() {

    return (

        <Container>

            <DivHeader>
                <h1>Preencha todos os dados a seguir, para se cadastrar na plataforma.</h1>
            </DivHeader>

            <DivImage>
                <img src={cadastro} />
            </DivImage>

            <DivDados>
            
                <h1>Dados dos Alunos </h1>

                <div>
                    <Input label="RG do aluno" width="276px" />
                    <Input label="Cpf do Aluno" width="276px" />
                    <Input label="Cpf do Responsável" width="276px" />
                </div>

                {/* <div id="anexo">
                    <input label="Anexo" width="276px" />
                    <input label="Anexo" width="276px" />
                    <input label="Anexo" width="276px" />
                </div> */}


            </DivDados>


        </Container>
    );
}

export default StudentRegister;