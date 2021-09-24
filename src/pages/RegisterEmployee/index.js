import {Container, DivDados, DivImagem} from "./styles";
import iconRegistroProfessor from "../../assets/registerEmployee/iconRegistroProfessor.svg"
import Input from "../../components/Input"

function RegisterEmployee() {
    return(
        <Container>
            <DivImagem>
                <header>
                    Preencha todos os dados a seguir, para se cadastrar na plataforma.
                </header>

                <div>
                    <img src={iconRegistroProfessor} />
                </div>
            </DivImagem>

            <DivDados>
                <header>
                    Dados do  Funcionario
                </header>

                <div>
                    <Input label="Nome Completo" width="553px"/>
                    
                </div>
            </DivDados>
        </Container>
    )
}

export default RegisterEmployee;