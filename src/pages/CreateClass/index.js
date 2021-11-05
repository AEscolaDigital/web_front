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
    ContainerSearchDiv
} from "./styles";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import Dropzone from "../../components/Dropzone";

import membro from "../../assets/createclass/membro.svg"
import foto from "../../assets/createclass/foto.svg";

import arrowLeft from "../../assets/addMember/arrowLeft.svg";
import arrowRight from "../../assets/addMember/arrowRight.svg";
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"
import cancel from "../../assets/select/cancel.svg"
import downArrow from "../../assets/select/downArrow.svg"
import iconDelete from "../../assets/select/delete.svg"


import { api } from "../../services/api";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

function CreateClass() {

    const [toogle, setToogle] = useState(true);
    const [value, setOpenClose] = useState('none');
    const [valueHeight, setHeight] = useState('0px');

    useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
        setHeight(() => toogle ? '80px' : '450px');

    }, [toogle]);



    const [classes, setClasses] = useState();
    const [loadclasses, setloadClasses] = useState();

    useEffect(() => {
        let loadClasses = async () => {

            try {
                const response = await api.get(`/classes`);
                setClasses(response.data)

            } catch (error) {
                httpError503(error.response);
            }
        };

        loadClasses();

    }, [loadclasses]);

    const [idClass, setIdClass] = useState();
    const [usersClass, setUsersClass] = useState();

    console.log(usersClass);

    useEffect(() => {

        let loadClassesId = async () => {

            if (idClass > 0) {
                setToogle(true)

                try {
                    const response = await api.get(`/classes/${idClass}`);
                    setUsersClass(response.data)

                    console.log(response);

                } catch (error) {
                    httpError503(error.response);
                }
            }

        };

        loadClassesId();

    }, [idClass]);

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

    const classCreatedSuccessfully = (text) => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${text}`,
            showConfirmButton: false,
            timer: 1500
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
            classCreatedSuccessfully("Turma criada, com sucesso!");


        } catch (error) {

            if (error.response === undefined) {
                httpError503()
            } else {
                errorCreateClass(error.response.data)
            }
        }

    }

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
                            <ContainerSearchDiv>
                                <img src={cancel} alt="Icone de cancelar" />
                                <img src={downArrow} onClick={e => setToogle(state => !state)} alt="Icone seta para baixo" />
                            </ContainerSearchDiv>
                            <ContainerOption style={{
                                display: value,
                            }} >
                                <ContainerSearch>
                                    <input placeholder="Pesquisar" />
                                </ContainerSearch>
                                <Select>
                                    <span >Selecione alguma turma</span>
                                    <hr />
                                    <div id="option" >
                                        {classes !== undefined && (
                                            classes.map(classe =>
                                                <div onClick={() => setIdClass(classe.id) } >
                                                    <a href="#AddMemberToClass" >
                                                    <span>{classe.name}</span>
                                                    <img src={iconDelete} alt="Icone de Lixeira" />
                                                    </a>
                                                </div>
                                            ))}

                                    </div>

                                </Select>
                            </ContainerOption>

                        </ContainerSelect>
                    </CreateClassAndSelectClass>


                    <ContainerImg id="img" >
                        <img src={membro} alt="Imagem representando a criação de uma nova turma" />
                    </ContainerImg>

                </ContainerCreateClassAndSelectClass>

                <ContainerAddMemberToClass>

                    <div id="AddMemberToClass" >
                        <h1>Adicionar  Membros : 
                            {/* {usersClass !== undefined && (
                                usersClass.name 
                            )} */}
                        </h1>
                        <form>
                            <Input label="Informe o e-mail" />
                            <div id="buttonAddMemberToClass" >
                                <BtnSubmit text="Adicionar" />
                            </div>
                        </form>
                    </div>

                    <div id="AddMemberToClassExcel" >
                        <AddMemberWithWxcelWile>
                            <Content>
                                <Dropzone />
                            </Content>
                        </AddMemberWithWxcelWile>
                    </div>

                </ContainerAddMemberToClass>

                <div>
                    <span>Turma: Português</span>
                </div>

                <ContainerTable>
                    <thead>
                        <tr id="trTh">
                            <th></th>
                            <th></th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>E-mail</th>

                        </tr>
                    </thead>

                    <tbody>
                        {usersClass !== undefined && (

                            usersClass.rows.map(userClass => (
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td><img alt="Foto de perfil" src={foto} /></td>
                                    <td>{userClass.name}</td>
                                    <td>{userClass.email}</td>
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

            </Container>



        </>

    );
}

export default CreateClass;