import { Container, DivHeader, InputRegistros } from "./styles"
import Input from "../../components/Input"
import company from "../../assets/companyRegistration/company.svg"

function CompanyRegistration() {

    return (

        <Container>
            <DivHeader>
                <div>
                    <h1>Seja bem-vindo! <br />
                    Preencha todos os dados abaixo, para se cadastrar na plataforma.
                    </h1>
                </div>

                <div>
                    <h3>Conte-nos sobre você</h3>
                </div>
            </DivHeader>

            <InputRegistros>
                <div>
                    <Input label="Informe seu nome" width="420px" />
                    <Input label="Telefone comercial" width="420px" />
                    <Input label="Nome da empresa" width="420px" />
                    <Input label="CNPJ" width="420px" />
                    <Input label="Tamanho da Empresa" width="330px" />

                    <div className="endereco">
                        <h3>Endereço</h3>
                    </div>

                    <div>
                        <Input label="Informe o seu CEP" />
                        <Input label="Informe a rua onde reside" />
                    </div>

                    <div>
                        <Input  width="230px"/>
                        <Input width="150px "/>
                    </div>

                </div>

                <div>
                    <img src={company} />
                </div>



            </InputRegistros>
        </Container>

    );
}

export default CompanyRegistration;