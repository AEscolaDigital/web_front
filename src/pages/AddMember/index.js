import memberRegister from "../../assets/memberRegistration/memberRegister.png";
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"
import arrowLeft from "../../assets/memberRegistration/arrowLeft.svg";
import arrowRight from "../../assets/memberRegistration/arrowRight.svg";

import Header from "../../components/Header";
import Nav from "../../components/Nav";
import RadioButton from "../../components/RadioButton";
import BtnSubmit from "../../components/BtnSubmit";
import Input from "../../components/Input";
import Dropzone from "../../components/Dropzone";
import FileList from "../../components/FileList";

import {
    Container,
    Cabeçalho,
    CabeçalhoLeft,
    CabeçalhoRight,
    Body,
    Page,
    ContainerAddMember,
    ContainerTable,
    UploadCSV,
    Content
} from "./styles";

import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { uniqueId } from "lodash";
import filesize from "filesize";

function AddMember() {

    const [loadUsers, setLoadUsers] = useState([]);

    const [loadUsersCSV, setLoadUsersCSV] = useState([]);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let loadUsers = async () => {

            try {
                const response = await api.get("/users");

                setUsers(response.data);

            } catch (error) {
                httpError503(error.response);
            }
        };

        loadUsers();

    }, [loadUsers, loadUsersCSV]);

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

    const memberSuccessfullyAdded = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Adcionado com sucesso!',
            showConfirmButton: false,
            timer: 1000
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/users", {
                name: formAddMember.name,
                email: formAddMember.email,
                role_id: formRadioButton.role,
            });


            console.log(response.data);
            memberSuccessfullyAdded();
            setLoadUsers();

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

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const handleUpload = (files) => {
        const uploadedFiles_ = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null
        }))

        setUploadedFiles(uploadedFiles_);

        uploadedFiles_.forEach(processUpload);
        setLoadUsers();

    }

    const updateFile = (id, data) => {

        setUploadedFiles({ uploadedFiles: uploadedFiles.map(uploadedFile => {
            return id == uploadedFile.id 
            ? { ... uploadedFile, ...data }
            : updateFile;
        }) })
    }


    const processUpload = async (uploadedFile) => {
        const data = new FormData();

        data.append('fileCSV', uploadedFile.file, uploadedFile.name);

        const response = await api.post('/users', data, {

            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total));

                updateFile(uploadedFile.id, {
                    progress
                })
            }
        })

        if (response.data.sucess == true) {
            alert("Terminou");
            setLoadUsersCSV();

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
                        <li>enviar um arquivo excel conforme o exemplo <Link to="/addMember" >aqui</Link>
                        </li>
                    </ol>

                </CabeçalhoLeft>

                <CabeçalhoRight>
                    <img src={memberRegister} alt="Imagem representando o adicionamento de membros na plataforma" />
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
                            value={formAddMember.name}
                            handler={handleInput} />

                        <Input
                            label="Informe o E-mail"
                            width="400px"
                            id="email"
                            type="email"
                            value={formAddMember.email}
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

                    <UploadCSV>
                        <Content>
                            <Dropzone onUpload={handleUpload} />
                            {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

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
                                <td>Aluno</td>
                                <td>{user.created_at}</td>
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
                                <img src={arrowLeft} alt="Seta para esquerda" />
                                <img src={arrowRight} alt="Seta para direita" />
                            </div>
                        </div>
                    </tfoot>

                </ContainerTable>

            </Body>


        </Container>
    );
}

export default AddMember;