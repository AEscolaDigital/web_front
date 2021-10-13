import { Container, DivImage, DivDados, DivHeader, DivBtn, DivGenre, DivGenreText } from "./styles"
import cadastro from "../../assets/studentRegister/registro 1.svg"
import Input from "../../components/Input"
import InputFile from "../../components/inputFile"
import BtnSubmit from "../../components/BtnSubmit"
import BtnCancel from "../../components/BtnCancel"
import RadioButton from "../../components/RadioButton"
import { useState } from "react"
import { signIn } from "../../services/security"
import { api } from "../../services/api";


function StudentRegister() {

    const [formStudent, setStudent] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        birth_date: "",
        rg: "",
        cpf: "",
        cpf_responsible: "",
        genre_id: "",
        street: "",
        number: "",
        cep: "",
        district: "",
        complement: "",
        city: "",
        state: "",

    });

    // const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        setStudent({ ...formStudent, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //setIsLoading(true);

        try {
            // const {name, email, password, phone, 
            //     birth_date, rg, cpf,
            //      cpf_responsible, genre_id, addresses } = formStudent;

            const response = await api.post("/student", {
                name: formStudent.name,
                email: formStudent.email,
                password: formStudent.password,
                phone: formStudent.phone,
                birth_date: formStudent.birth_date,
                rg: formStudent.rg,
                cpf: formStudent.cpf,
                cpf_responsible: formStudent.cpf_responsible,
                genre_id: formStudent.genre_id,
                street: formStudent.street,
                number: formStudent.number,
                cep: formStudent.cep,
                district: formStudent.district,
                complement: formStudent.complement,
                city: formStudent.city,
                state: formStudent.state

            });

            signIn(response.data)

            console.log(response.data)
            //setIsLoading(false)
            //history.push("/home");
        } catch (error) {
            console.log(error.response.data);

            // console.error(error);
            // alert(error.response.data.error);
            // setIsLoading(false);
        }
    };

    return (
        <>
            {/* {isLoading && <Loading/>} */}
            <Container>
                <DivHeader>
                    <div>
                        <h1>Preencha todos os dados a seguir, para se cadastrar na plataforma.</h1>
                    </div>

                    <div id="divTextAluno">
                        <h2>Dados do aluno</h2>
                    </div>
                </DivHeader>


                <DivImage>
                    <img src={cadastro} />
                </DivImage>


                <DivDados onSubmit={handleSubmit}>

                    <div>
                        <Input label="RG do aluno" id="rg" width="300px" handler={handleInput} />

                        <div>
                            <p>Foto do RG</p>

                            <InputFile />
                        </div>
                    </div>

                    <div>
                        <Input label="CPF do aluno" id="cpf" width="300px" handler={handleInput} mask="cpf" />

                        <div>
                            <p>Foto do CPF</p>

                            <InputFile />
                        </div>
                    </div>

                    <div>
                        <Input label="CPF do Responsável" id="cpf_responsible" width="300px" handler={handleInput} mask="cpf" />

                        <div>
                            <p>Foto do CPF (Responsável)</p>
                            <InputFile />
                        </div>
                    </div>

                    <Input label="Informe o CEP" id="cep" width="552px" handler={handleInput} mask="cep" />
                    <Input label="Informe a rua" id="street" width="552px" handler={handleInput} />

                    <div>
                        <Input label="Informe o bairro" id="district" width="354px" handler={handleInput} />
                        <Input label="Número" id="number" width="167px" handler={handleInput} />
                    </div>

                    <div>
                        <Input label="Estado" id="state" width="110px" value={formStudent.state} handler={handleInput} />
                        <Input label="Cidade" id="city" width="410px" value={formStudent.city} handler={handleInput} />
                    </div>

                    <Input label="Complemento" id="complement" width="550px" handler={handleInput} />

                    <div id="uploadResidencia">
                        <div>
                            <p>Foto do comprovante de residência</p>
                            <InputFile />
                        </div>
                    </div>


                    <DivGenreText>
                        <p>Escolha seu gênero : </p>
                    </DivGenreText>

                    <DivGenre>
                        <RadioButton text="Masculino" idInput="generoM" forLabel="generoM" name="genre" value="1" />
                        <RadioButton text="Feminino" idInput="generoF" forLabel="generoF" name="genre" value="2" />
                    </DivGenre>

                    <DivBtn>

                        <BtnCancel text="Cancelar" />
                        <div>
                            <BtnSubmit text="Concluir" />
                        </div>
                    </DivBtn>

                </DivDados>
            </Container>
        </>
    );
}

export default StudentRegister;