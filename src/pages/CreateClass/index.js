import {
    Container,
    CreateClassAndSelectClass,
    ContainerImg,
    ContainerAddMemberToClass,
    ContainerCreateClassAndSelectClass,
    Content,
    AddMemberWithWxcelWile,
    ContainerTable,
    ContainerSelect,
    ContainerOption,
    ContainerSearch,
    Select,
    ContainerSearchDiv,
    ContainerClassName
} from "./styles";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import Dropzone from "../../components/Dropzone";

import membro from "../../assets/createclass/membro.svg"
import arrowLeft from "../../assets/addMember/arrowLeft.svg";
import arrowRight from "../../assets/addMember/arrowRight.svg";
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"
import downArrow from "../../assets/select/downArrow.svg"
import iconDelete from "../../assets/select/delete.svg"
import iconDelete30 from "../../assets/iconsGlobal/iconDelete30.svg"

import { api } from "../../services/api";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import ProfilePicture from "../../components/ProfilePicture";

function CreateClass() {

    const [classes, setClasses] = useState([]);

    const [loadclasses, setloadClasses] = useState(0);

    useEffect(() => {
        let loadclasses = async () => {

            try {
                const response = await api.get(`/classes/1`);

                setClasses(response.data.rows)

            } catch (error) {
                httpError503(error.response);
            }
        };

        loadclasses();

    }, [loadclasses]);

    const [toogle, setToogle] = useState(true);
    const [value, setOpenClose] = useState('none');
    const [valueHeight, setHeight] = useState('0px');

    useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
        setHeight(() => toogle ? '80px' : '490px');

    }, [toogle]);


    const [idClass, setIdClass] = useState(0);
    const [usersClass, setUsersClass] = useState([]);

    const [loadUsersClass, setLoadUserClass] = useState(0);

    useEffect(() => {

        let loadClassesId = async () => {

            if (idClass > 0) {
                setToogle(true)

                try {
                    const response = await api.get(`/classes/${idClass}/page/1`);
                    setUsersClass(response.data.rows[0])

                } catch (error) {
                    httpError503(error.response);
                }
            }

        };

        loadClassesId();

    }, [idClass, loadUsersClass]);

    const errorCreateClass = (error) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error}`,
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

    const successAlert = (text) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
        })
    }

    const waitingToAddaMemberToTheClass = (close) => {
        Swal.fire({
            title: 'Adicionando alunos na turma!',
            html: 'Aguarde alguns segundos por favor',
            onOpen: () => {
                Swal.showLoading()
            },
            didOpen: () => {
                Swal.showLoading()
            },
        })

        if (close === true) {
            Swal.close()
            successAlert("Adicionados com sucesso!");
        }
    }


    const invalidFileExtension = () => {
        Swal.fire({
            title: '<strong>Arquivo inválido</strong>',
            icon: 'info',
            html:
                '<span> Caso você esteja tendo dificuldades para fazer o upload, <a href="/">clique aqui</a>',
            showCloseButton: true,
            focusConfirm: false,
        })
    }

    const classExclusionAlert = async () => {
        return await Swal.fire({
            title: 'Tem certeza?',
            text: "Você não poderá reverter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#28a745',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, exclua!',
            cancelButtonText: 'Não, exclua!'

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Excluído',
                    'Turma excluído, com sucesso.',
                    'success'
                )
                return true;

            } else {
                return false;
            }

        })

    }

    const [formCreateClass, setClass] = useState({
        name: "",
    });

    const handleInput = (e) => {
        setClass({ ...formCreateClass, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.post("/classes", {
                name: formCreateClass.name,
            });

            setClass({
                name: "",
            })

            setloadClasses(loadclasses + 1)
            successAlert("Turma criada, com sucesso!");


        } catch (error) {

            if (error.response === undefined) {
                httpError503()
            } else {
                errorCreateClass(error.response.data)
            }
        }

    }

    const [formAddMember, setAddMember] = useState({
        email: ""
    });

    const handleInputAddMember = (e) => {
        setAddMember({ ...formAddMember, [e.target.id]: e.target.value });
    }

    const handleSubmitAddMember = async (e) => {
        e.preventDefault();

        try {
            await api.post(`/classes/addMember/${idClass}`, {
                email: formAddMember.email,
            });

            setAddMember({
                email: "",
            })

            setLoadUserClass(loadUsersClass + 1)
            successAlert("Aluno adicionado, com sucesso!");


        } catch (error) {

            if (error.response === undefined) {
                httpError503()
            } else {
                errorCreateClass(error.response.data)
            }
        }

    }

    const handleUpload = async (file) => {

        var extFile = file[0].name.split('.').pop();

        if (extFile === "csv") {
            waitingToAddaMemberToTheClass()

            const data = new FormData();

            data.append('fileCSV', file[0]);
            data.append('class_id', idClass);

            const response = await api.post('/classes/addMembers/excelFile', data)

            if (response.data.sucess === true) {
                setLoadUserClass(loadUsersClass + 1)
                waitingToAddaMemberToTheClass(true)
            }
        } else {
            invalidFileExtension()
        }
    }

    const [idClassDelete, setIdClassDelete] = useState();

    const handleDeleteClass = async (e) => {
        e.preventDefault();

        if (await classExclusionAlert()) {
            try {
                await api.delete(`/classes/${idClassDelete}`);

                setloadClasses(loadclasses + 1)

            } catch (error) {

                if (error.response === undefined) {
                    httpError503()
                } else {

                }
            }

        }

    }

    const handleDeleteUsers = async (id) => {

        if (await classExclusionAlert()) {

            try {
                await api.delete(`/classes/deleteMember/${idClass}/${id}`);

                setLoadUserClass(loadUsersClass + 1)

            } catch (error) {

                if (error.response === undefined) {
                    httpError503()
                }
            }

        }

    }

    let profilePictureStyle = {
        style: "style2"
    };

    return (
        <>
            <Header />
            <Nav />

            <Container>

                <ContainerCreateClassAndSelectClass>

                    <CreateClassAndSelectClass >
                        <h1>Criar uma Turma</h1>

                        <form onSubmit={handleSubmit} >
                            <Input
                                id="name"
                                label="Nome da turma"
                                handler={handleInput}
                                value={formCreateClass.name}
                                autocomplete="off"
                            />

                            <div id="button" >
                                <BtnSubmit text="Criar" />
                            </div>
                        </form>

                        <div id="selectClass" >
                            <h1>Selecione alguma turma para adicionar membros a ela:</h1>
                        </div>

                        <ContainerSelect style={{
                            height: valueHeight,
                        }} >
                            <ContainerSearchDiv onClick={e => setToogle(state => !state)} >
                                <span>{usersClass.name}</span>
                                <img src={downArrow} alt="Icone seta para baixo" />
                            </ContainerSearchDiv>
                            <ContainerOption style={{
                                display: value,
                            }} >
                                <ContainerSearch>
                                    <input placeholder="Pesquisar" />
                                </ContainerSearch>
                                <Select src={iconDelete} >
                                    <span >Selecione alguma turma</span>
                                    <hr />
                                    <div id="option" >
                                        {classes.map(classe =>
                                            <div>
                                                <a onClick={() => setIdClass(classe.id)} href="#class" >
                                                    <span>{classe.name}</span>
                                                </a>
                                                <form
                                                    onSubmit={handleDeleteClass} >
                                                    <button
                                                        onClick={() => setIdClassDelete(classe.id)} />
                                                </form>

                                            </div>
                                        )}

                                    </div>

                                </Select>
                                <div id="footerSelect" >
                                    <div>
                                        Total de turmas:
                                    </div>

                                    <div>
                                        <div>
                                            1 de 10
                                        </div>

                                        <div id="divImgSetasFooterSelect">
                                            <img
                                                src={arrowLeft}
                                                alt="Seta para esquerda" />

                                            <img src={arrowRight}
                                                alt="Seta para direita" />

                                        </div>
                                    </div>
                                </div>
                            </ContainerOption>

                        </ContainerSelect>
                    </CreateClassAndSelectClass>


                    <ContainerImg id="img" >
                        <img src={membro} alt="Imagem representando a criação de uma nova turma" />
                    </ContainerImg>

                </ContainerCreateClassAndSelectClass>

                {idClass > 0 && (
                    <ContainerAddMemberToClass>

                        <div id="AddMemberToClass" >
                            <h1>Adicionar Membros:</h1>
                            <span>Turma: {usersClass.name}</span>
                            <form onSubmit={handleSubmitAddMember} >
                                <Input
                                    id="email"
                                    handler={handleInputAddMember}
                                    label="Informe o e-mail"
                                    value={formAddMember.email}
                                    autocomplete="off"
                                />

                                <div id="buttonAddMemberToClass" >
                                    <BtnSubmit text="Adicionar" />
                                </div>
                            </form>
                        </div>

                        <div id="AddMemberToClassExcel" >
                            <AddMemberWithWxcelWile>
                                <Content>
                                    <Dropzone 
                                        onUpload={handleUpload}
                                        text="Arraste uma arquivo .csv aqui..."  />
                                </Content>
                            </AddMemberWithWxcelWile>
                        </div>

                    </ContainerAddMemberToClass>
                )}

                {idClass > 0 && (
                    <ContainerClassName srcIconDelte={iconDelete30} >
                        <span id="class" >Turma: {usersClass.name}</span>

                    </ContainerClassName>
                )}

                {idClass > 0 && (

                    <ContainerTable srcIconDelte={iconDelete30} >
                        <thead>
                            <tr id="trTh">
                                <th></th>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            {usersClass.users !== undefined && (

                                usersClass.users.map(userClass => (
                                    <tr>
                                        <td>
                                            <ProfilePicture
                                                style={profilePictureStyle}
                                                name={userClass.name}
                                                profile_picture={userClass.profile_picture} />
                                        </td>
                                        <td>{userClass.name}</td>
                                        <td>{userClass.email}</td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    handleDeleteUsers(userClass.id)
                                                }}
                                                id="btnDelete"
                                            />
                                        </td>
                                    </tr>
                                ))
                            )}

                        </tbody>

                        <tfoot>
                            <div>
                                Total de membros:
                            </div>

                            <div>

                                <div>
                                    Linhas por pagina: 10
                                </div>

                                <div>
                                    1 de 10
                                </div>

                                <div id="divImgSetas">
                                    <img
                                        src={arrowLeft}
                                        alt="Seta para esquerda" />

                                    <img src={arrowRight}
                                        alt="Seta para direita" />

                                </div>
                            </div>
                        </tfoot>

                    </ContainerTable>
                )}

            </Container>

        </>

    );
}

export default CreateClass;