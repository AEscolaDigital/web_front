import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import NavTask from "../../components/NavTask";

import {
    ContainerTask,
    ReferenciaAnexo,
    ActivityDeliveryContainer,
    ContainerStudentAnexo,
    InputFile,
} from "./styles";

import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"

import { useState } from "react";

import plusSign from "../../assets/iconsGlobal/plusSign.svg"
import BtnSubmit from "../../components/BtnSubmit";
import { api } from "../../services/api";
import Swal from "sweetalert2";
import { useLocation, useHistory } from "react-router-dom";


function CreateTask() {

    const history = useHistory();
    const location = useLocation();

    const [discipline, setDiscipline] = useState([]);

    const [disciplineNavTask, setDisciplineNavTask] = useState([]);

    const [disciplineLocation, setDisplineLocation] = useState(true);

    if (disciplineLocation) {
        setDiscipline(location.state)
        setDisplineLocation(false);
    }

    const [inputs, setInput] = useState([{ id: 'link' }])

    const [inputsMax, setInputsMax] = useState(1)

    const handleAddInputs = async () => {

        const itensCopy = Array.from(inputs);

        if (inputs.length < 3) {
            itensCopy.push({ id: `link${inputsMax}` });

            setInputsMax(inputsMax + 1)
        }

        if (inputs.length === 3) {
            alert("O número máximo é de 3 links")
        }

        setInput(itensCopy);
    }

    const [inputsFile, setInputFile] = useState([{ id: 'file' }])

    const [filesMax, setFilesMax] = useState(1)

    const handleAddInputsFile = async () => {

        const itensCopy = Array.from(inputsFile);

        if (inputsFile.length < 3) {
            itensCopy.push({ id: `file${filesMax}` });

            setFilesMax(filesMax + 1)
        }

        if (inputsFile.length === 3) {
            alert("O número máximo é de 3 links")
        }

        setInputFile(itensCopy);
    }

    const [formTask, setFormTesk] = useState({
        name: "",
        description: "",
        date_delivery: "",
        spots: "",
        link: "",
        link1: "",
        link2: "",
    });


    const handleChange = (e) => {
        setFormTesk({ ...formTask, [e.target.id]: e.target.value });
    }

    const handleInput = (e) => {
        setFormTesk({ ...formTask, [e.target.id]: e.target.value });
    };


    const [formTaskFile, setFormTeskFile] = useState({
        file: {},
        file1: {},
        file2: {},
    });

    const handleFile = (e) => {
        setFormTeskFile({ ...formTaskFile, [e.target.id]: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            let data = new FormData();

            data.append("name", formTask.name);
            data.append("description", formTask.description);
            data.append("date_delivery", formTask.date_delivery);
            data.append("spots", formTask.spots);
            data.append("link", formTask.link);
            data.append("link1", formTask.link1);
            data.append("link2", formTask.link2);
            data.append("file", formTaskFile.file);
            data.append("file1", formTaskFile.file1);
            data.append("file2", formTaskFile.file2);


            await api.post(`tasks/${discipline.id}`, data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })

            successAlert("Tarefa criada com sucesso");

            history.push({
                pathname: `/listOfTasks`,
                state: {
                    discipline: discipline
                }
            })

            history.push("/listOfTasks")

        } catch (error) {

            if (error.response === undefined) {
                httpError503()

            } else {
                errorAlert(error.response.data)
            }

        }
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

    const errorAlert = (error, textFooter) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `${error.error}`,
            footer: `${textFooter}`
        })
    }

    return (
        <>
            <Header />
            <Nav />
            <NavTask
                setProps={setDisciplineNavTask}
                iSOnPage={true} />

            <form onSubmit={handleSubmit} >
                <ContainerTask>
                    <div id="taskHeader" >
                        <div className="titulo">
                            <p>Preencha os campos para adicionar uma tarefa</p>
                            <span id="nameDisiciplina" >Disciplina: {discipline.name}
                            </span>
                        </div>
                    </div>

                    <div>
                        <Input
                            id="name"
                            label="Nome da Tarefa"
                            width="423px"
                            height="63px"
                            required
                            autocomplete="off"
                            handler={handleInput} />

                        <div id="taskDescription" >
                            <label>Descrição da Tarefa:</label>
                            <textarea
                                id="description"
                                rows="5"
                                cols="30"
                                required
                                autocomplete="off"
                                maxlength="765"
                                onChange={handleChange} />
                        </div>

                        <Input
                            id="date_delivery"
                            label="Data de entrega"
                            type="date"
                            height="63px"
                            width="423px"
                            required
                            autocomplete="off"
                            handler={handleInput} />

                        <Input
                            id="spots"
                            label="Pontos"
                            type="number"
                            width="423px"
                            height="63px"
                            autocomplete="off"
                            handler={handleInput} />
                    </div>
                </ContainerTask>

                <ActivityDeliveryContainer>

                    <ContainerStudentAnexo>
                        <div>
                            <ReferenciaAnexo>
                                <div id="title" >
                                    <span>Material de referência </span>
                                </div>

                                <div class="subTitle" >
                                    <span>Links</span>
                                </div>

                                {inputs.map(input => (
                                    <div class="inputs" >
                                        <Input
                                            type="url"
                                            id={input.id}
                                            handler={handleInput}
                                            width="380px"
                                        />

                                        <img
                                            src={plusSign}
                                            onClick={() => handleAddInputs()} />
                                    </div>
                                ))}

                                <div class="subTitle" >
                                    <span>Arquivos</span>
                                </div>

                                <InputFile>
                                    {inputsFile.map(inputFile => (
                                        <div className="files" >
                                            <div>
                                                <label>

                                                    {inputFile.id === "file" && (
                                                        formTaskFile.file.name === undefined ? <span>Selecione um arquivo</span> : formTaskFile.file.name
                                                    )}

                                                    {inputFile.id === "file1" && (
                                                        formTaskFile.file1.name === undefined ? <span>Selecione um arquivo</span> : formTaskFile.file1.name

                                                    )}
                                                    {inputFile.id === "file2" && (
                                                        formTaskFile.file2.name === undefined ? <span>Selecione um arquivo</span> : formTaskFile.file2.name
                                                    )}

                                                    <input
                                                        id={inputFile.id}
                                                        type="file"
                                                        onChange={handleFile} />
                                                </label>
                                            </div>
                                            <div>
                                                <img
                                                    src={plusSign}
                                                    onClick={() => handleAddInputsFile()} />
                                            </div>
                                        </div>
                                    ))}

                                </InputFile>
                            </ReferenciaAnexo>
                        </div>
                    </ContainerStudentAnexo>
                    <div id="btn" >
                        <BtnSubmit
                            text="Criar tarefa"
                        />
                    </div>
                </ActivityDeliveryContainer>
            </form>

        </>
    );
}

export default CreateTask;