import { Container, DivHeader, DivImage, DivCampos } from "./styles"
import company from "../../assets/companyRegistration/company.svg"
import Input from "../../components/Input"
import BtnSubmit from "../../components/BtnSubmit"

function CompanyRegistration() {

    return (

        <Container>
            <DivHeader>
                <div>
                    <h1>
                        Seja bem-vindo! <br />
                        Preencha todos os dados abaixo, para se cadastrar na plataforma.
                    </h1>
                </div>
            </DivHeader>

            <DivImage>
                <img src={company} />
            </DivImage>

            <DivCampos>
                <div>
                    <h3>Conte-nos sobre você</h3>
                </div>

                <div>
                    <Input label="Informe seu nome" width="420px" />
                    <Input label="Telefone comercial" width="420px" />
                    <Input label="Nome da empresa" width="420px" />
                    <Input label="CNPJ" width="420px" />
                    <Input width="330px" />
                </div>

                <div>
                    <h2>Endereço</h2>
                </div>

                <div>
                    <Input label="Informe o seu CEP" type="number"  min="8" max="8"  width="425px" required/>
                    <Input label="Informe a rua onde reside" width="425px" required/>
                </div>
                <div>
                    <Input label="Informe o bairro" width="230px" required/>
                    <Input label="Número" type="number" max="2000" min="1" width="150px" required/>
                </div>

                <div>
                    <Input label="Cidade" width="420px" required />
                    <Input label="Complemento" width="420px"/>
                 </div>

                 <h1>Faça o Login: </h1>

                 <div>
                     <Input label="informe o email" width="425px" required/>
                     <Input label="Informe a senha" type="password" width="280px" required/>
                 </div>

                 <div>
                     <BtnSubmit text="Enviar"/>
                 </div>

            </DivCampos>

            
            

        </Container>
    );
}

export default CompanyRegistration;