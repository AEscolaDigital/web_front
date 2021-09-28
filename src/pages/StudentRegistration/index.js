import { Container, DivImage, DivDados, DivHeader } from "./styles"
import cadastro from "../../assets/studentRegister/registro 1.svg"
import Input from "../../components/Input"
import InputFile from "../../components/inputFile"



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

                {/*Seção dos uploads e documentação*/}

                <div>
                    <Input label="RG do aluno" width="270px" />
                    <span>
                        <InputFile />
                    </span>
                </div>


                <div>
                    <Input label="CPF do aluno" width="270px" />
                    <span>
                        <InputFile />
                    </span>
                </div>


                <div>
                    <Input label="CPF do Responsável" width="270px" />
                    <span>
                        <InputFile />
                    </span>
                </div>
                {/********************************************************* */}

                {/*Seção do endereço do usuário */}

                <div>
                    <Input label="Informe o CEP" width="552px" />

                    <Input label="Informe a rua" width="552px" />
                </div>

                <div>
                    <Input label="Informe o bairro" width="354px" />
                    <Input label="Número" width="167px" />
                </div>

                <div>
                    <Input label="Estado" width="110px" />
                    <Input label="Cidade" width="400px" />
                </div>

                <span>
                    <Input label="Complemento" width="550px"/>    
                 </span>


                 <p>Faça o upload do comprovante de residência</p>

                 <div>
                     <InputFile  width="200px"/>
                 </div>
                {/********************************************************** */}

            </DivDados>


        </Container>
    );
}

export default StudentRegister;