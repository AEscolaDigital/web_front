import iconTeam from "../../assets/teams/iconTeam.svg"
import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"
import arrowLeft from "../../assets/addMember/arrowLeft.svg";
import arrowRight from "../../assets/addMember/arrowRight.svg";
import downArrow from "../../assets/select/downArrow.svg"
import iconDelete from "../../assets/select/delete.svg"

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import BtnCancel from "../../components/BtnCancel";
import Card from "../../components/Card";
import Dropzone from "../../components/Dropzone";

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

    const [father, setFather] = useState(false);

    if (father) {
        setFather(false)
        console.log(father);
        setLoadDisciplines(loadDisciplines + 1);
    }

    // if (father) {
    //     console.log(father);
    //     setFather(false)
    // }

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

        loadclasses();

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
        let data = new FormData();

        data.append("name", newDiscipline.name);
        data.append("class_id", selectedClass.id );
        data.append("image", image[0] );


        await api.post("/disciplines", data, {
            headers: {
                "content-type": "multipart/form-data"
            }
        })

        setIsModalVisible(false);
        setLoadDisciplines(classes + 1);
        successAlert("Disciplina criada com sucesso");
        setSelectedClass("");
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

    return (
        <Container>
            {isModalVisible ?
                <Modal title="Criar turma">
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
                                    <Select src={iconDelete} >
                                        <span >Selecione alguma turma</span>
                                        <hr />
                                        <div id="option" >
                                            {classes.map(classe =>
                                                <div>
                                                    <a onClick={() => {
                                                        setToogle(true);
                                                        setSelectedClass(classe);
                                                    }}>
                                                        <span >{classe.name}</span>
                                                    </a>
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
            <div id="btnCreateTeam" >
                <span onClick={() => setIsModalVisible(true)}>
                    <img 
                    src={iconTeam} 
                    alt="Icone de um grupo de pessoas" /> 
                    <span>Criar disciplina</span> 
                </span>
            </div>
            <div id="titleYourTeams" >
                <h1>Suas disciplinas</h1>
            </div>
            <Section>

                {disciplines.map(discipline =>
                    <Card
                        disciplinesName={discipline.name}
                        teacherName={discipline.school.name}
                        id={discipline.id}
                        setPropss={setFather} >
                        <img src={discipline.image} alt=""
                       />
                    </Card>
                )}

            </Section>
        </Container>

    );
}

export default Teams;