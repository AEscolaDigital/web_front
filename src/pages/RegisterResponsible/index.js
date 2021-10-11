

import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import InputFile from "../../components/inputFile";
import resgisterResponsible from "../../assets/registerResponsible/imageResponsible.svg"

import { Container, DivHeader, DivRegister, DivImage, DivBtn } from "./styles";
import { Link } from "react-router-dom";

function RegisterResponsible() {
    return(
        <Container>
            <DivHeader>
                <h1>Dados do Responsável</h1>

                <h1>Preencha todos os dados abaixo, para se cadastrar na plataforma.</h1>
            </DivHeader>

            <DivRegister>
                <Input label="Nome Completo" width="600px"/>
                
                <div>
                    <Input label="Informe o seu RG" width="300px"/>
                    <div>
                    <p>Mande uma foto do seu RG</p>
                    <InputFile  />
                    </div>
                  
                    <Input label="Informe o seu CPF" width="300px"/>
                    <div>
                    <p>Mande uma foto do seu CPF</p>
                    <InputFile />
                    </div>
                </div>

                <Input label="Data de Nascimento" width="300px"/>
                <Input label="Informe seu CEP" width=" 490px"/>
                <Input label="Informe a rua onde reside" width="490px"/>
                
                <div>
                    <Input label="Informe o Bairro" width="250px"/>
                    <Input label="Informe o Número" width="200px"/>
                </div>

                <div>
                <Input label="Informe seu Estado" width="200px"/>
                <Input label="Informe sua Cidade" width="250px" id="inputCidade"/>
                </div>

                <Input label="Informe algum Complemento" width="490px" id="complemento"/>

                <DivBtn>
                    <Link to="/register" > <BtnCancel text="Voltar" /> </Link> 
                    <BtnSubmit text="Concluir" id="btnSubmit" />
                </DivBtn>
                
            </DivRegister>

            <DivImage>
                <img src={resgisterResponsible}/>
            </DivImage>
        </Container>
    );
}

export default RegisterResponsible;