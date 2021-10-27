import Header from "../../components/Header";
import Nav from "../../components/Nav";
import memberRegister from "../../assets/memberRegistration/memberRegister.png";
import RadioButton from "../../components/RadioButton";
import arrowLeft from "../../assets/memberRegistration/arrowLeft.svg";
import arrowRight from "../../assets/memberRegistration/arrowRight.svg";
import BtnSubmit from "../../components/BtnSubmit";
import { Container, Cabeçalho, CabeçalhoLeft, CabeçalhoRight, Body, Page, ContainerAddMember, ContainerTable } from "./styles";
import Input from "../../components/Input";
import { useEffect, useState } from "react"
import { signIn } from "../../services/security"
import { api } from "../../services/api";

function MemberRegister() {

    const [users, setUsers] = useState([]);

    console.log(users);

    useEffect(() => {
        const loadUsers = async () => {

            try {
                const response = await api.get("/users");

                setUsers(response.data);

            } catch (error) {
                alert(error);
            }
        };

        loadUsers();

    }, []);

    const [formAddMember, setMember] = useState({
        name: "",
        email: "",
    });

    const handleInput = (e) => {
        setMember({ ...formAddMember, [e.target.id]: e.target.value });
    }

    const [formRadioButton, setRole] = useState({
        role: "",
    });

    const handleRadioButton = (e) => {
        setRole({ ...formRadioButton, [e.target.name]: e.target.value });
        console.log(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users", {
                name: formAddMember.name,
                email: formAddMember.email,
                role_id: formRadioButton.role,
            });

            signIn(response.data)

            console.log(response.data);

        } catch (error) {
            console.log(error.response.data);
        }

    }

    return (
        <Container>
            <Header />
            <Nav />

            <Cabeçalho>
                <CabeçalhoLeft>
                    <div>
                        <h2> Adicionar membros e visualização membros</h2>
                        <h4>Nome da Empresa</h4>
                    </div>

                    <p>Instruções para adicionar membro</p>

                    <ol>Existe duas opções para adicionar membro

                        <li>adicionar o e-mail do usuário</li>
                        <li>enviar um arquivo excel conforme o exemplo, <a href="">aqui</a></li>

                    </ol>

                </CabeçalhoLeft>

                <CabeçalhoRight>
                    <img src={memberRegister} />
                </CabeçalhoRight>
            </Cabeçalho>

            <Body>
                <Page>
                    <button>Adicionar membros</button>

                    <button>Visualização de membros</button>

                    <div id="linha"></div>
                </Page>

                <ContainerAddMember>
                    <form onSubmit={handleSubmit} >
                        <Input
                            label="Informe o Nome"
                            width="400px"
                            id="name"
                            handler={handleInput} />

                        <Input
                            label="Informe o E-mail"
                            width="400px"
                            id="email"
                            handler={handleInput} />

                        <div id="radioButton" onChange={handleRadioButton} >
                            <RadioButton
                                text="Aluno"
                                idInput="aluno"
                                forLabel="aluno"
                                name="role"
                                value="1" />

                            <RadioButton
                                text="Professor"
                                idInput="professor"
                                forLabel="professor"
                                name="role"
                                value="2" />

                            <RadioButton
                                text="Administrador"
                                idInput="admin"
                                forLabel="admin"
                                name="role"
                                value="3" />
                        </div>

                        <div id="btnSubmit">
                            <BtnSubmit text="Adicionar" />
                        </div>

                    </form>

                    <div id="fileExcel">
                        <div>
                            Arraste o arquivo excel aqui
                        </div>
                    </div>
                </ContainerAddMember>

                <ContainerTable>
                    <thead>
                        <tr id="trTh">
                            <th>NOME</th>
                            <th>E-MAIL</th>
                            <th>TIPO DE USUÁRIO</th>
                            <th>Adicionado em</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map(user =>
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>Aluno</td>
                                <td>{user.createdAt}</td>
                            </tr>
                        )}
                    </tbody>

                    <tfoot>
                        <div>
                            <div>
                                Linhas por pagina: 10
                            </div>

                            <div>
                                1 de 2
                            </div>

                            <div id="divImgSetas">
                                <img src={arrowLeft} />
                                <img src={arrowRight} />
                            </div>
                        </div>
                    </tfoot>

                </ContainerTable>

            </Body>


        </Container>
    );
}

export default MemberRegister;