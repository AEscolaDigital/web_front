import { Container, DivImage, DivDados, DivHeader } from "./styles"
import cadastro from "../../assets/studentRegister/registro 1.svg"
import Input from "../../components/Input"
import InputFile from "../../components/inputFile"
import BtnSubmit from "../../components/BtnSubmit"
import BtnCancel from "../../components/BtnCancel"
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
            <Container >

                <DivHeader>
                    <h1>Preencha todos os dados a seguir, para se cadastrar na plataforma.</h1>

                    <h2>Dados do Aluno</h2>
                    
                </DivHeader>

                <DivImage>
                    <img src={cadastro} />
                </DivImage>



                <DivDados onSubmit={handleSubmit}>


                    {/* Seção dos uploads e documentação */}

                    <div>
                        <Input label="RG do aluno" id="rg" width="270px" handler={handleInput} />
                        <span>
                            <InputFile />
                        </span>
                    </div>

                    <div>
                        <Input label="CPF do aluno" id="cpf" width="270px" handler={handleInput} />
                        <span>
                            <InputFile />
                        </span>
                    </div>


                    <div>
                        <Input label="CPF do Responsável" id="cpf_responsible" width="270px" handler={handleInput} />
                        <span>
                            <InputFile />
                        </span>
                    </div>
                    {/********************************************************* */}

                    {/*Seção do endereço do usuário */}

                    <div>
                        <Input label="Informe o CEP" id="cep" width="552px" handler={handleInput} />

                        <Input label="Informe a rua" id="street" width="552px" handler={handleInput} />

                    </div>

                    <div>
                        <Input label="Informe o bairro" id="district" width="354px" handler={handleInput}/>
                        
                        <Input label="Número" id="number" width="167px" handler={handleInput} />

                       
                    </div>

                    <div>
                        <Input label="Estado" id="state" width="110px" value={formStudent.state} handler={handleInput} />
                        <Input label="Cidade" id="city" width="400px" value={formStudent.city}  handler={handleInput}/>
                    </div>

                    <span>
                        <Input label="Complemento" id="complement" width="550px" handler={handleInput} />
                    </span>


                    <p>Faça o upload do comprovante de residência</p>

                    <div>
                        <InputFile width="200px" />
                    </div>
                    {/********************************************************** */}


                    {/*Gênero Aluno */}
                    {/*Adicionar oo campo genero no backend*/} 
                    <div>
                        <p>
                            Gênero
                        </p>

                        <div>
                        </div>

                        <div>
                        </div>

                    </div>

                    {/************ */}


                    {/*Botões */}
                    <div className="entrar" >
                        <BtnSubmit text="Concluir">
                        </BtnSubmit>
                    </div>

                    <div className="cancelar">
                        <BtnCancel text="Cancelar">
                        </BtnCancel>
                    </div>
                </DivDados>
            </Container>
        </>
    );
}

export default StudentRegister;