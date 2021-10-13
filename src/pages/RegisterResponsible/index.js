import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import InputFile from "../../components/inputFile";
import resgisterResponsible from "../../assets/registerResponsible/imageResponsible.svg"
import {
    Container,
    DivHeader,
    FormContainer,
    DivImage, DivBtn
} from "./styles";
import { useHistory, Link } from "react-router-dom";
import { useState } from "react"
import { signIn } from "../../services/security"
import { api } from "../../services/api";
import { useLocation } from "react-router-dom";

function RegisterResponsible() {

    const history = useHistory();

    const [ andress , getAndress] = useState({
        logradouro: "",
    })

    const getCep = async () =>{
        const cep = document.querySelector('#cep').value;
    
        if(cep.length == 9){
            const response = await  fetch(`http://viacep.com.br/ws/${cep}/json/`);
            const data = await response.json();

            getAndress(data)
        }
    }

    const location = useLocation();
    const param = location.state;

    const [formResponsible, setResponsible] = useState({
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
            const response = await api.post("/responsibles", {
                name: param.name,
                email: param.email,
                password: param.password,
                phone: param.phone,
                birth_date: param.birthDate,
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

            const idUser = response.data.idUser;

            handleSendImages(idUser);

            //history.push("/register/modalaviso")

        } catch (error) {
            console.log(error.response.data);
        }
    }

    const [image_rg, setImageRg] = useState("");
    const [image_cpf, setImageCpf] = useState("");
    const [image_proof_of_residence, setImageProofOfResidence] = useState("");

    const handleImageRg = (e) => { setImageRg(e.target.files[0]); };
    const handleImageCpf = (e) => { setImageCpf(e.target.files[0]); };
    const handleImageProofOfResidence = (e) => { setImageProofOfResidence(e.target.files[0]); };

    const handleSendImages = async (idUser) => {

        let data = new FormData();

        data.append("image_cpf", image_cpf);
        data.append("image_rg", image_rg);
        data.append("image_proof_of_residence", image_proof_of_residence);

        await api.post(`/responsibles/${idUser}/imagens/`, data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })
        
    };

    return (
        <Container>
            <DivHeader>
                <h1>Dados do Responsável</h1>
              
                <h1>Preencha todos os dados abaixo, para se cadastrar na plataforma.</h1>
            </DivHeader>

            <FormContainer onSubmit={handleSubmit}>
                <div>
                    <Input
                        label="Informe o seu RG"
                        width="300px" id="rg"
                        handler={handleInput} />

                    <div>
                        <p>Mande uma foto do seu RG</p>
                        <input id="inputFileRG" type="file" onChange={handleImageRg}  />
                    </div>

                    <Input
                        label="Informe o seu CPF"
                        width="300px" id="cpf"
                        handler={handleInput}
                        mask="cpf" />

                    <div>
                        <p>Mande uma foto do seu CPF</p>
                        <input type="file" onChange={handleImageCpf} />

                    </div>
                </div>

                <Input
                    id="cep"
                    label="Informe seu CEP"
                    width=" 490px"
                    handler={handleInput}
                    onBlur={getCep} 
                    mask="cep" />

                <Input
                    id="street"
                    label="Informe a rua onde reside"
                    value={andress.logradouro}
                    width="490px"
                    handler={handleInput} />

                <div>
                    <Input
                        id="district"
                        label="Informe o Bairro"
                        width="250px"
                        value={andress.bairro}
                        handler={handleInput} />

                    <Input
                        id="number"
                        label="Informe o Número"
                        width="200px"
                        handler={handleInput} />
                </div>

                <div>
                    <Input
                        id="state"
                        label="Informe seu Estado"
                        width="200px"
                        handler={handleInput} />

                    <Input
                        id="city"
                        label="Informe sua Cidade"
                        width="250px"
                        value={andress.localidade}
                        handler={handleInput} />
                </div>

                <Input
                    id="complement"
                    label="Informe algum Complemento"
                    width="490px"
                    handler={handleInput} />

                    <span>Comprovante de residência</span>
                    <input type="file" onChange={handleImageProofOfResidence}  />


                <DivBtn>
                    <Link to="/register" > <BtnCancel text="Voltar" /> </Link>
                    <BtnSubmit text="Concluir" id="btnSubmit" />
                </DivBtn>

            </FormContainer>

            <DivImage>
                <img src={resgisterResponsible} />
            </DivImage>
        </Container>
    );
}

export default RegisterResponsible;