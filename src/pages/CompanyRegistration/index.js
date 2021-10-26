import { Container, DivHeader, DivImage, DivCampos, FormContainer } from "./styles";
import company from "../../assets/companyRegistration/company.svg";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { useState } from "react";

function CompanyRegistration() {


    const [andress, getAndress] = useState({
        logradouro: "",
        localidade: "",
        bairro: "",
        uf: "",
    })

    const getCep = async () => {
        const cep = document.querySelector('#cep').value;
    
        if (cep.length == 9) {
            const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            getAndress(data)
        }
    }

    const [formRegistration, setRegistration] = useState({
        name: "",
        phone: "",
        CompanyName: "",
        cnpj: "",
        cep: "",
        school_size: '',
        number: "",
        complement: "",
        email: "",
        password: "",

    });


    const handleInput = (e) => {
        setRegistration({ ...formRegistration, [e.target.id]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formRegistration.phone);

        try {
            const response = await api.post("/schools", {
                name: formRegistration.name,
                phone: formRegistration.phone,
                name_school: formRegistration.CompanyName,
                cnpj: formRegistration.cnpj,
                school_size: formRegistration.school_size,
                address: [{
                    cep: formRegistration.cep,
                    street: andress.logradouro,
                    district: andress.bairro,
                    number: formRegistration.number,
                    city: andress.localidade,
                    state: formRegistration.state,
                    uf_state: andress.uf,
                    complement: formRegistration.complement,
                }],
                email: formRegistration.email,
                password: formRegistration.password,

            });


            signIn(response.data)
           

            const idUser = response.data.idUser;

            //history.push("/register/modalaviso")

        } catch (error) {
            console.log(error.response.data);
        }
    }



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

            <DivCampos onSubmit={handleSubmit}>
                <div>
                    <h3>Conte-nos sobre você</h3>
                </div>

                <div>
                    <Input label="Informe seu nome" width="420px" handler={handleInput} id="name" />
                    <Input label="Telefone comercial" width="420px" mask="phone" handler={handleInput} id="phone" />
                    <Input label="Nome da escola" width="420px" handler={handleInput} id="CompanyName" />
                    <Input label="CNPJ" width="420px" handler={handleInput} id="cnpj" />
                    <Input label="Quantidade de alunos" width="330px" id="school_size" handler={handleInput} />
                </div>

                <div>
                    <h2>Endereço</h2>
                </div>

                <div>
                    <Input
                        label="Informe o seu CEP"
                        width="425px"
                        required
                        handler={handleInput}
                        id="cep"
                        onBlur={getCep}
                        mask="cep" />

                    <Input
                        id="street"
                        label="Informe a rua onde reside"
                        value={`${andress.logradouro}`}
                        width="490px"
                        handler={handleInput} 
                        disabled/>
                </div>

                <div>
                    <Input
                        label="Informe o bairro"
                        width="230px"
                        value={`${andress.bairro}`}
                        handler={handleInput}
                        id="district"
                        disabled />

                    <Input
                        label="Número"
                        type="number"
                        width="150px"
                        required
                        handler={handleInput}
                        id="number" />
                </div>

                <div>
                    <Input
                        label="Cidade"
                        width="280px"
                        required
                        value={`${andress.localidade}`}
                        handler={handleInput}
                        disabled
                        id="city" />

                    <Input
                        label="UF"
                        width="100px"
                        required
                        value={`${andress.uf}`}
                        handler={handleInput}
                        disabled
                        id="uf_state" />
                </div>

                <div>
                    <Input
                        label="Estado"
                        width="420px"
                        handler={handleInput}
                        id="state" />

                    <Input
                        label="Complemento"
                        width="420px"
                        handler={handleInput}
                        id="complement" />
                </div>

                <h1> Como você fará Login: </h1>

                <div>
                    <Input label="informe o email" width="425px" required handler={handleInput} id="email" />
                    <Input label="Informe a senha" type="password" width="280px" required handler={handleInput} id="password" />
                </div>

                <div>
                    <BtnSubmit text="Enviar" />
                </div>

            </DivCampos>

        </Container>
    );
}

export default CompanyRegistration;