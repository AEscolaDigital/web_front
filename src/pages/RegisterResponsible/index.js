import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import InputFile from "../../components/inputFile";
import resgisterResponsible from "../../assets/registerResponsible/imageResponsible.svg"

import { Container, DivHeader, DivRegister, DivImage, DivBtn } from "./styles";
import { Link } from "react-router-dom";

import { useState } from "react"
import { signIn } from "../../services/security"
import { api } from "../../services/api";

function RegisterResponsible() {

    const [formResponsible, setResponsible] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        birth_date: "",
        rg: "",
        cpf: "",
        genre_id: "",
        street: "",
        number: "",
        cep: "",
        district: "",
        complement: "",
        city: "",
        state: "",

    });

    const handleInput = (e) => {
        setResponsible({ ...formResponsible, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await api.post("/students", {
                name: "Teste",
                email: "teste@gmail.com",
                password: "123456",
                phone: "(11)96838-7212",
                birth_date: "2002-05-08",
                rg: formResponsible.rg,
                cpf: formResponsible.cpf,
                genre_id: 1,
                street: formResponsible.street,
                number: formResponsible.number,
                cep: formResponsible.cep,
                district: formResponsible.district,
                complement: formResponsible.complement,
                uf_state: "SP",
                city: formResponsible.city,
                state: formResponsible.state

            });

            signIn(response.data)

            console.log(response.data)


        } catch (error) {
            console.log(error.response.data);

            // console.error(error);
            // alert(error.response.data.error);
            // setIsLoading(false);
        }
    };

    return (
        <Container>
            <DivHeader>
                <h1>Dados do Responsável</h1>

                <h1>Preencha todos os dados abaixo, para se cadastrar na plataforma.</h1>
            </DivHeader>

            <DivRegister>
                <div>
                    <Input label="Informe o seu RG" width="300px" id="rg" handler={handleInput}/>
                    <div>
                        <p>Mande uma foto do seu RG</p>
                        <InputFile forLabel="rg"  idInput="rg" handler={handleInput}/>
                    </div>

                    <Input label="Informe o seu CPF" width="300px" id="cpf" handler={handleInput} mask="cpf"/>
                    <div>
                        <p>Mande uma foto do seu CPF</p>
                        <InputFile forLabel="cpf" idInput="cpf" handler={handleInput} />
                    </div>
                </div>

                
                <Input label="Informe seu CEP" width=" 490px" handler={handleInput}  mask="cep"/>
                <Input label="Informe a rua onde reside" width="490px" handler={handleInput} />

                <div>
                    <Input label="Informe o Bairro" width="250px" handler={handleInput}/>
                    <Input label="Informe o Número" width="200px" handler={handleInput}/>
                </div>

                <div>
                    <Input label="Informe seu Estado" width="200px" handler={handleInput}/>
                    <Input label="Informe sua Cidade" width="250px" id="inputCidade" handler={handleInput}/>
                </div>

                <Input label="Informe algum Complemento" width="490px" id="complemento" handler={handleInput}/>

                <DivBtn>
                    <Link to="/register" > <BtnCancel text="Voltar" /> </Link>
                    <BtnSubmit text="Concluir" id="btnSubmit" />
                </DivBtn>

            </DivRegister>

            <DivImage>
                <img src={resgisterResponsible} />
            </DivImage>
        </Container>
    );
}

export default RegisterResponsible;