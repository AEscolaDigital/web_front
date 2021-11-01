import company from "../../assets/registerSchool/company.svg";
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"

import { Container, DivHeader, DivImage, DivCampos } from "./styles";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import { signIn } from "../../services/security";
import { useState } from "react";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { address } from "../../services/index";
import { api } from "../../services/api";

function CompanyRegistration() {

    const history = useHistory();

    const [andress, setAndress] = useState({
        logradouro: "",
        localidade: "",
        bairro: "",
        uf: "",
    })

    const onBlurCep = async (e) => {
        
        if (e.target.value?.length !== 9) {
          return;
        }

        const { logradouro, bairro, localidade, uf } =
        await address.findAddressByZipCode(e.target.value);

        setAndress({
            logradouro,
            bairro,
            localidade,
            uf,
        })

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

    const errorLogin = (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error}`,
            footer: `Verifique se seu e-mail, está correto!`
        })
    }

    const httpError503 = () => {
        Swal.fire({
            html: `
                   <img style="width: 300px; height: 250px; margin-top: 20px;" src=${imageHttpError503} />
                   </br>
                   <span>Error 503, serviço indisponível</span>
                   </br></br>
                   <span>Tente novamente mais tarde!</span>
                `,
        })
    }

    const waitingToAddAchool = (close) => {
        Swal.fire({
            title: 'Gravando os dadados, <br>na base de dados!',
            html: 'Aguarde alguns segundos por favor',
            onOpen: () => {
                Swal.showLoading()
            },
            didOpen: () => {
                Swal.showLoading()
            },
        })

        if (close == true) {
            Swal.close()
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        waitingToAddAchool()

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
                    state: "São Paulo",
                    uf_state: andress.uf,
                    complement: formRegistration.complement,
                }],
                email: formRegistration.email,
                password: formRegistration.password,

            });


            signIn(response.data)

            if (response.data.id != null) {
                waitingToAddAchool(true)
            }

            history.push("/Teams")

        } catch (error) {

            if (error.response === undefined) {
                httpError503()

            } else {
                errorLogin(error.response.data)
            }

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
                <img src={company} alt="Imagem representando o cadastro de uma escola na plataforma" />
            </DivImage>

            <DivCampos onSubmit={handleSubmit}>
                <div>
                    <h3>Conte-nos sobre você</h3>
                </div>

                <div>
                    <Input
                        label="Informe seu nome"
                        colorLabel="var(--color-background)"
                        width="420px"
                        required
                        handler={handleInput}
                        id="name" />
                    <Input
                        label="Telefone comercial"
                        colorLabel="var(--color-background)"
                        width="420px"
                        mask="phone"
                        required
                        handler={handleInput}
                        id="phone" />
                    <Input
                        label="Nome da escola"
                        colorLabel="var(--color-background)"
                        width="420px"
                        required
                        handler={handleInput}
                        id="CompanyName" />
                    <Input
                        label="CNPJ"
                        colorLabel="var(--color-background)"
                        width="420px"
                        required
                        mask="cnpj"
                        handler={handleInput}
                        id="cnpj" />
                    <Input
                        label="Quantidade de alunos"
                        colorLabel="var(--color-background)"
                        required
                        width="330px"
                        id="school_size"
                        handler={handleInput} />
                </div>

                <div>
                    <h2>Endereço</h2>
                </div>

                <div>
                    <Input
                        label="Informe o seu CEP"
                        colorLabel="var(--color-background)"
                        width="425px"
                        required
                        handler={handleInput}
                        id="cep"
                        onBlur={onBlurCep}
                        mask="cep" />

                    <Input
                        id="street"
                        label="Informe a rua onde reside"
                        colorLabel="var(--color-background)"
                        value={andress.logradouro}
                        width="425px"
                        handler={handleInput}
                        disabled />
                </div>

                <div>
                    <Input
                        label="Informe o bairro"
                        colorLabel="var(--color-background)"
                        width="230px"
                        value={andress.bairro}
                        handler={handleInput}
                        id="district"
                        disabled />

                    <Input
                        label="Número"
                        colorLabel="var(--color-background)"
                        width="150px"
                        required
                        handler={handleInput}
                        id="number" />
                </div>

                <div>
                    <Input
                        label="Cidade"
                        colorLabel="var(--color-background)"
                        width="280px"
                        required
                        value={`${andress.localidade}`}
                        handler={handleInput}
                        disabled
                        id="city" />

                    <Input
                        label="UF"
                        colorLabel="var(--color-background)"
                        width="100px"
                        required
                        value={andress.uf}
                        handler={handleInput}
                        disabled
                        id="uf_state" />
                </div>

                <div>
                    <Input
                        label="Complemento"
                        colorLabel="var(--color-background)"
                        width="420px"
                        handler={handleInput}
                        id="complement" />
                </div>

                <h1> Como você fará Login: </h1>

                <div>
                    <Input
                        label="Informe o email"
                        colorLabel="var(--color-background)"
                        width="425px"
                        required
                        handler={handleInput} id="email" />
                    <Input
                        label="Informe a senha"
                        colorLabel="var(--color-background)"
                        type="password"
                        width="280px"
                        required
                        handler={handleInput}
                        id="password" />
                </div>

                <div>
                    <BtnSubmit text="Enviar" />
                </div>

            </DivCampos>

        </Container>
    );
}

export default CompanyRegistration;