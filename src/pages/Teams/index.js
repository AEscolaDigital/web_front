import iconTeam from "../../assets/teams/iconTeam.svg"
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"
import arrowLeft from "../../assets/addMember/arrowLeft.svg";
import arrowRight from "../../assets/addMember/arrowRight.svg";
import downArrow from "../../assets/select/downArrow.svg"

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import BtnCancel from "../../components/BtnCancel";
import Card from "../../components/Card";
import Dropzone from "../../components/Dropzone";
import PermissionComponent from "../../components/PermissionComponent";


import {
    Container,
    Section,
    ContainerUploadImage,
    ContainerSelect,
    Content,
    Select,
    ContainerSearchDiv,
    ContainerOption,
    ContainerSearch
} from "./styles";

import { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { api } from "../../services/api";
import { getUserRole } from "../../services/security";

function Teams() {

    const [toogle, setToogle] = useState(true);
    const [value, setOpenClose] = useState('none');
    const [valueHeight, setHeight] = useState('0px');

    useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
        setHeight(() => toogle ? '80px' : '490px');

    }, [toogle]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [disciplines, setDisciplines] = useState([]);
    const [loadDisciplines, setLoadDisciplines] = useState(0);
   
    useEffect(() => {
        let loadDisciplines = async () => {

            try {
                const response = await api.get(`/disciplines`);
                setDisciplines(response.data)
              

            } catch (error) {
                httpError503(error.response);
            }
        };

        loadDisciplines();

    }, [loadDisciplines]);

    const [father, setGrandson] = useState(false);

    if (father) {
        setGrandson(false)
        setLoadDisciplines(loadDisciplines + 1);
    }

    const [selectedClass, setSelectedClass] = useState([]);

    const [classes, setClasses] = useState([])

    useEffect(() => {
        let loadclasses = async () => {
            try {
                const response = await api.get(`/classes/1`);

                setClasses(response.data.rows)

            } catch (error) {
                httpError503(error.response);
            }
        };

        if (getUserRole() !== "ROLE_USER") {
            loadclasses();
        }

    }, []);

    const [image, setImage] = useState(null);


    const [newDiscipline, setNewDiscipline] = useState({
        name: "",
    })
    const handleInput = (e) => {
        setNewDiscipline({ ...newDiscipline, [e.target.id]: e.target.value });
    };

    const handleAddNewDicipline = async (e) => {
        e.preventDefault();

        try {
            let data = new FormData();

            data.append("name", newDiscipline.name);
            data.append("class_id", selectedClass.id);

            const image_ = image === null ? "" : image[0];

            data.append("image", image_);


            await api.post("/disciplines", data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })

            setIsModalVisible(false);
            setLoadDisciplines(loadDisciplines + 1);
            successAlert("Disciplina criada com sucesso");
            setSelectedClass("");


        } catch (error) {
            errorAlert(error.response.data,
                "Informe outro nome para a disciplina")
        }


    };

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

    const errorAlert = (error, textFooter) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error}`,
            footer: `${textFooter}`
        })
    }


    return (
        <Container role={getUserRole()} >
            {isModalVisible ?
                <Modal title="Criar disciplina">
                    <form onSubmit={handleAddNewDicipline} >
                        <div id="inputsModal" >
                            <ContainerSelect style={{
                                height: valueHeight,
                            }} >
                                <ContainerSearchDiv onClick={e => setToogle(state => !state)} >
                                    <span>{selectedClass.name}</span>
                                    <img src={downArrow} alt="Icone seta para baixo" />
                                </ContainerSearchDiv>
                                <ContainerOption style={{
                                    display: value,
                                }} >
                                    <ContainerSearch>
                                        <input
                                            placeholder="Pesquisar" />
                                    </ContainerSearch>
                                    <Select>
                                        <span >Selecione alguma turma</span>
                                        <hr />
                                        <div id="option" >
                                            {classes.map(classe =>
                                                <div>
                                                    <button onClick={() => {
                                                        setToogle(true);
                                                        setSelectedClass(classe);
                                                    }}>
                                                        <span >{classe.name}</span>
                                                    </button>
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
                            <ContainerUploadImage>
                                <Content>
                                    <Dropzone onUpload={setImage} />
                                </Content>
                            </ContainerUploadImage>
                            <Input
                                id="name"
                                className="labelWhite"
                                label="Nome da disciplina"
                                width="420px"
                                handler={handleInput}
                                required
                            />
                        </div>
                        <div id="btnModal" >
                            <div onClick={() => setIsModalVisible(false)} >
                                <BtnCancel text="Cancelar" />
                            </div>
                            <BtnSubmit text="Concluído" />
                        </div>
                    </form>
                </Modal> : null}
            <Header />
            <Nav />
            <PermissionComponent role="ROLE_ADMIN,ROLE_TEACHER" >
                <div id="btnCreateTeam" >
                    <span onClick={() => setIsModalVisible(true)}>
                        <img
                            src={iconTeam}
                            alt="Icone de um grupo de pessoas" />
                        <span>Criar disciplina</span>
                    </span>
                </div>
            </PermissionComponent>

            <div id="titleYourTeams" >
                <h1>Suas disciplinas</h1>
            </div>

            <Section>
                {disciplines.map(discipline => 
                    <Card
                        disciplinesName={discipline.name}
                        teacherName={discipline.teacher_name}
                        id={discipline.id}
                        setProps={setGrandson} >
                        <img src={discipline.image} alt=""
                        />
                    </Card>
                )}

            </Section>
        </Container>

    );
}

export default Teams;