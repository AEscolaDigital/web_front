import memberRegister from "../../assets/addMember/memberRegister.png";
import imageFileCSV from "../../assets/addMember/imageFileCSV.jpg";
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"
import arrowLeft from "../../assets/addMember/arrowLeft.svg";
import arrowRight from "../../assets/addMember/arrowRight.svg";
import fileSchoolCSV from "../../assets/addMember/user_plataforma.csv";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import RadioButton from "../../components/RadioButton";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import Dropzone from "../../components/Dropzone";

import {
    Container,
    Cabeçalho,
    ContainerAddMemberLeft,
    CabeçalhoRight,
    Body,
    Page,
    ContainerAddMember,
    ContainerTable,
    UploadCSV,
    Content,
    ContainerModal
} from "./styles";

import { useEffect, useState } from "react"
import { api } from "../../services/api";
import Swal from "sweetalert2";

import Modal from "../../components/Modal";
import BtnCancel from "../../components/BtnCancel";

function AddMember() {

    const [loadUsers, setLoadUsers] = useState(0);
    const [loadUsersCSV, setLoadUsersCSV] = useState([]);
    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(0);
    const [pages, setPages] = useState();
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        let loadUsers = async () => {

            try {
                const response = await api.get(`/users/page/${currentPage}`);

                setTotalUsers(response.data.count);
                setUsers(response.data.rows);

                const totalPages = await Math.ceil(response.data.count / 10);
                setPages(totalPages);


            } catch (error) {
                httpError503(error.response);
            }
        };

        loadUsers();

    }, [loadUsers, loadUsersCSV, currentPage]);

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
    }

    const errorAddingMember = (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error}`,
            footer: `Verifique se este e-mail, está correto!`
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

    const memberSuccessfullyAdded = (text) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    const invalidFileExtension = () => {
        Swal.fire({
            title: '<strong>Arquivo inválido</strong>',
            icon: 'info',
            html:
                '<span> Caso você esteja tendo dificuldades para fazer o upload, <a onClick={setIsModalVisible(true)} >clique aqui</a>',
            showCloseButton: true,
            focusConfirm: false,
        })
    }

    const waitingToAddMember = (close) => {
        Swal.fire({
            title: 'Aguarde!',
            html: 'Adicionando membros na base de dados!',
            onOpen: () => {
                Swal.showLoading()
            },
            didOpen: () => {
                Swal.showLoading()
            },
        })

        if (close === true) {
            Swal.close()
            memberSuccessfullyAdded("Membros Adicionados com sucesso!");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/users", {
                name: formAddMember.name,
                email: formAddMember.email,
                role_id: formRadioButton.role,
            });

            memberSuccessfullyAdded("Adicionado com sucesso!");
            setLoadUsers(loadUsers + 1);

            setMember({
                name: "",
                email: ""
            })

        } catch (error) {

            if (error.response === undefined) {
                httpError503()

            } else {
                errorAddingMember(error.response.data)
            }
        }

    }

    const handleUpload = async (file) => {

        var extFile = file[0].name.split('.').pop();

        if (extFile === "csv") {
            waitingToAddMember()

            const data = new FormData();

            data.append('fileCSV', file[0]);

            const response = await api.post('/users/excelFile', data)

            if (response.data.sucess === true) {
                setLoadUsersCSV(loadUsersCSV + 1);
                waitingToAddMember(true)
            }
        } else {
            invalidFileExtension()
        }
    }

    const role = {
        1: 'Administrador(a)',
        2: 'Aluno(a)',
        3: 'Professor(a)'
    }

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (

        <Container>

            {isModalVisible ?
                <Modal title="Como adicionar membros utilizando um arquivo excel">
                    <ContainerModal>
                        <span>Assista o video abaixo</span>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/jl92UHvcodY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div id="fileExample" >
                            <span>Faça o download do arquivo de excel de exemplo</span>
                            <span>Cliqui no icone, para fazer o download</span>
                            <a href={fileSchoolCSV} download>
                                <img
                                    src={imageFileCSV}
                                    alt="W3Schools"
                                    width="104"
                                    height="142"
                                />
                            </a>

                        </div>
                        <div onClick={() => setIsModalVisible(false)} >
                            <BtnCancel text="Fechar" />
                        </div>
                    </ContainerModal>
                </Modal> : null}

            <Header />
            <Nav />

            <Cabeçalho>
                <ContainerAddMemberLeft>
                    <div>
                        <h2> Adicionar membros e visualização membros</h2>
                        <h4>Nome da Empresa</h4>
                    </div>

                    <p>Instruções para adicionar membro</p>

                    <ol>Existe duas opções para adicionar membro
                        <li>adicionar o e-mail do usuário</li>
                        <li>enviar um arquivo excel conforme o exemplo
                            <span onClick={() => setIsModalVisible(true)} >, <u> aqui</u></span>
                        </li>
                    </ol>

                </ContainerAddMemberLeft>

                <CabeçalhoRight>
                    <img src={memberRegister} alt="Imagem representando o adicionamento de membros na plataforma" />
                </CabeçalhoRight>
            </Cabeçalho>

            <Body>
                <Page>
                    <button>Adicionar membros</button>

                    <button>Visualização de membros</button>
                </Page>

                <ContainerAddMember>
                    <form onSubmit={handleSubmit} >
                        <Input
                            label="Informe o Nome"
                            width="400px"
                            id="name"
                            autocomplete="off"
                            value={formAddMember.name}
                            handler={handleInput} />

                        <Input
                            label="Informe o E-mail"
                            width="400px"
                            id="email"
                            type="email"
                            autocomplete="off"
                            value={formAddMember.email}
                            handler={handleInput} />

                        <div id="radioButton" onChange={handleRadioButton} >
                            <RadioButton
                                text="Aluno"
                                idInput="aluno"
                                forLabel="aluno"
                                name="role"
                                value="2" />

                            <RadioButton
                                text="Professor"
                                idInput="professor"
                                forLabel="professor"
                                name="role"
                                value="3" />

                            <RadioButton
                                text="Administrador"
                                idInput="admin"
                                forLabel="admin"
                                name="role"
                                value="1" />
                        </div>

                        <div id="btnSubmit">
                            <BtnSubmit text="Adicionar" />
                        </div>

                    </form>

                    <UploadCSV>
                        <Content>
                            <Dropzone 
                                onUpload={handleUpload}
                                text="Arraste um arquivo .csv aqui..."
                         />
                        </Content>
                    </UploadCSV>

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
                                <td>{role[user.role_id]}</td>
                                <td>{user.created_at}</td>
                            </tr>
                        )}
                    </tbody>

                    <tfoot>
                        <div>
                            Total de membros: {totalUsers}
                        </div>

                        <div>

                            <div>
                                Linhas por pagina: 10
                            </div>

                            <div>
                                {currentPage} de {pages}
                            </div>

                            <div id="divImgSetas">
                                {currentPage > 1 && (
                                    <img
                                        src={arrowLeft}
                                        onClick={() => setCurrentPage(currentPage - 1)}
                                        alt="Seta para esquerda" />
                                )}

                                {currentPage < pages && (
                                    <img src={arrowRight}
                                        onClick={() => setCurrentPage(currentPage + 1)}
                                        alt="Seta para direita" />
                                )}

                            </div>
                        </div>
                    </tfoot>

                </ContainerTable>

            </Body>


        </Container>
    );
}

export default AddMember;