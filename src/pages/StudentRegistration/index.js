import { Container, DivImage, DivDados, DivHeader } from "./styles"
import cadastro from "../../assets/studentRegister/registro 1.svg"
import Input from "../../components/Input"
import InputFile from "../../components/inputFile"
import BtnSubmit from "../../components/BtnSubmit"
import BtnCancel from "../../components/BtnCancel"
import { useState } from "react"
import { signIn } from "../../services/security"


function StudentRegister() {

    const [student, setStudent]  = useState({
        name: "",
        email: "",
        password:"",
        phone: "",
        birth_date: "",
        rg : "",
        cpf : "",
        cpf_responsible: "",
        genre_id:"",
        addresses: [{
            street:"",
            number:"",
            cep:"",
            district:"",
            complement:"",
            city:"",
            state:"",
            uf_state: ""
        }]
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleInput = (e) => {
        setStudent({ ...student, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
    
    try{
        const {name, email, password, phone, 
            birth_date, rg, cpf,
             cpf_responsible, genre_id, addresses } = student;

        const response = await api.post("http://localhost:3000/", {
            name,
            email,
            password,
            phone,
            birth_date,
            rg,
            cpf,
            cpf_responsible,
            genre_id, addresses

        });
        
        signIn(response.data)

        setIsLoading(false)
        history.push("/home");
    } catch (error){
        console.error(error);
        alert(error.response.data.error);
        setIsLoading(false);
        }
    };

    return (
        <>
        {isLoading && <Loading/>}
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
                    <Input label="RG do aluno" width="270px" value={student.rg} handler={handleInput} />
                    <span>
                        <InputFile />
                    </span>
                </div>


                <div>
                    <Input label="CPF do aluno" width="270px" value={student.cpf} handler={handleInput}/>
                    <span>
                        <InputFile />
                    </span>
                </div>


                <div>
                    <Input label="CPF do Responsável" width="270px" value={student.cpf_responsible} handler={handleInput}/>
                    <span>
                        <InputFile />
                    </span>
                </div>
                {/********************************************************* */}

                {/*Seção do endereço do usuário */}

                <div>
                    <Input label="Informe o CEP" width="552px" value={student.cep} handler={handleInput} />

                    <Input label="Informe a rua" width="552px" value={student.street}/>
                </div>

                <div>
                    <Input label="Informe o bairro" width="354px" value={student.district}/>
                    <Input label="Número" width="167px" value={student.number} />
                </div>

                <div>
                    <Input label="Estado" width="110px"  value={student.state}/>
                    <Input label="Cidade" width="400px" value={student.city} />
                </div>

                <span>
                    <Input label="Complemento" width="550px" value={student.complement} />
                </span>


                <p>Faça o upload do comprovante de residência</p>

                <div>
                    <InputFile width="200px" />
                </div>
                {/********************************************************** */}


                {/*Gênero Aluno */}

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
                {/****** */}
            </DivDados>


        </Container>
    </>
    );
}

export default StudentRegister;