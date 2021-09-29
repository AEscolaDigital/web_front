import {Container, DivDados, DivHeader, DivImagem} from "./styles";
import iconRegistroProfessor from "../../assets/registerEmployee/iconRegistroProfessor.svg"
import Input from "../../components/Input"
import BtnCancel from "../../components/BtnCancel"
import BtnSubmit from "../../components/BtnSubmit"
import InputFile from "../../components/inputFile"

function RegisterEmployee() {
    return(
        <Container>

            <DivHeader>
                <h1>
                    Preencha todos os dados a seguir, para se cadastrar na plataforma.
                </h1>
            </DivHeader>

            <DivImagem>
                <img src={iconRegistroProfessor} />
            </DivImagem>

            <DivDados>
                <h1>
                    Dados do  Funcionario
                </h1>

                <div>
                    <Input label="Nome Completo" width="540px" />
                </div>  
                
                <div>
                    <Input label="Informe o RG" width="270px" />
                    <span>
                        <InputFile />
                    </span>
                </div>

                <div>
                    <Input label="Informe o CPF" width="270px" />
                    <span>
                        <InputFile />
                    </span>
                </div>

                <div>
                    <Input label="Inforne o CEP" width="240px" />

                    <Input label="Inforne a rua" width="540px" />

                </div>

                <div>
                    <Input label="Bairro" width="290px" />

                    <Input label="Número" width="113px" />
                </div>

                <div>
                    <Input label="Estado" width="113px" />

                    <Input label="Cidade" width="398px" />
                </div>
                
                <div>
                    <Input label="Complemento" width="540px" />
                </div>

                <div>
                    <span>
                        Faça o upload do comprovante de residência
                    </span>

                    <div>
                        <InputFile />
                    </div>
                </div>

                <div>
                    <span>
                        Genêro:
                    </span>

                    <div className="inputGenero">
                        <div>
                            <input value="Masculino" width="120px" />
                        </div>
                        
                        <div>
                            <input value="Femenino" width="120px" />
                        </div>
                    </div>
                </div>

                <div className="inputButao">
                    <div>
                        <BtnCancel value="Cancelar" />
                    </div>

                    <div>
                        <BtnSubmit label="Cadastrar" />
                    </div>
                </div>

            </DivDados>
        </Container>
    )
}

export default RegisterEmployee;