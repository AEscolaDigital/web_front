import {Container, DivDados, DivImagem} from "./styles";
import iconRegistroProfessor from "../../assets/registerEmployee/iconRegistroProfessor.svg"
import Input from "../../components/Input"
import InputFile from "../../components/InputFile"

function RegisterEmployee() {
    return(
        <Container>
            <DivImagem>
                <h1>
                    Preencha todos os dados a seguir, para se cadastrar na plataforma.
                </h1>

                <img src={iconRegistroProfessor} />
            </DivImagem>

            <DivDados>
                <h1>
                    Dados do  Funcionario
                </h1>

                <div>
                    <Input label="Nome Completo" width="553px" />
                </div>

                <div>
                    <div>
                        <Input label="Informe o seu RG" width="276px" />

                        <Input label="Informe o seu CPF" width="276px" />
                    </div>

                    <div>
                        <InputFile />

                        <InputFile />
                    </div>
                </div>

                <div>
                    <Input label="Informe o seu CEP" width="467px" />
                </div>

                <div>
                    <Input label="Nome da rua" width="467px"/>
                </div>

                <div>
                    <Input label="Número" width="167px" />

                    <Input label="Bairro" width="253px" />
                </div>

                <div>
                    <InputFile />
                </div>
            </DivDados>
        </Container>
    )
}

export default RegisterEmployee;