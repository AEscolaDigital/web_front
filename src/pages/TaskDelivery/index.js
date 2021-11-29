import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import NavTask from "../../components/NavTask";
import ProfilePicture from "../../components/ProfilePicture";

import {
    Container,
    Task,
    ContainerTaskDelivery,
} from "./styles";


import imageHttpError503 from "../../assets/alert/imageHttpError503.svg"
import plusSign from "../../assets/iconsGlobal/plusSign.svg"


import { api } from "../../services/api";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { getUser } from "../../services/security";
import Swal from "sweetalert2";

function TaskDelivery() {

    const location = useLocation();

    const [task, setTask] = useState([]);

    useEffect(() => {

        let loadTasks = async () => {

            try {
                const response = await api.get(`tasks/${location.state.task.id}`);

                setTask(response.data[0]);

            } catch (error) {
                //httpError503(error.response);
            }
        };

        loadTasks();

    }, [location]);

    const [taskDelivery, setTaskDelivery] = useState([]);

    const [loadTaskDelivery, setLoadTaskDelivery] = useState(0);

    useEffect(() => {

        let loadTaskDelivery = async () => {

            try {
                const response = await api.get(`taskdelivery/user_id/${getUser().id}/task_id/${location.state.task.id}`);

                setTaskDelivery(response.data);

            } catch (error) {
                //httpError503(error.response);
            }
        };

        loadTaskDelivery();

    }, [loadTaskDelivery, location]);

    const [inputs, setInput] = useState([{ id: 'link' }])

    const [inputsMax, setInputsMax] = useState(1)

    const handleAddInputs = async () => {

        const itensCopy = Array.from(inputs);

        if (inputs.length < 2) {
            itensCopy.push({ id: `link${inputsMax}` });

            setInputsMax(inputsMax + 1)
        }

        if (inputs.length === 2) {
            alert("O número máximo é de 2 links")
        }

        setInput(itensCopy);
    }

    const [inputsFile, setInputFile] = useState([{ id: 'file' }])

    const [filesMax, setFilesMax] = useState(1)

    const handleAddInputsFile = async () => {

        const itensCopy = Array.from(inputsFile);

        if (inputsFile.length < 2) {
            itensCopy.push({ id: `file${filesMax}` });

            setFilesMax(filesMax + 1)
        }

        if (inputsFile.length === 2) {
            alert("O número máximo é de 2 arquivos")
        }

        setInputFile(itensCopy);
    }

    const [formTaskFile, setFormTeskFile] = useState({
        file: {},
        file1: {},
    });

    const handleFile = (e) => {
        setFormTeskFile({ ...formTaskFile, [e.target.id]: e.target.files[0] });
    };

    const [formTask, setFormTesk] = useState({
        link: "",
        link1: "",
        file: "",
        file1: "",
        file2: "",
    });

    const handleInput = (e) => {
        setFormTesk({ ...formTask, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            let data = new FormData();

            data.append("link", formTask.link);
            data.append("link1", formTask.link1);
            data.append("task_id", location.state.task.id);
            data.append("file", formTaskFile.file);
            data.append("file1", formTaskFile.file1);

            await api.post(`taskdelivery`, data, {
                headers: {
                    "content-type": "multipart/form-data"
                }
            })

            successAlert("Tarefa entregue com sucesso");
            setTimeout(() => {
                setLoadTaskDelivery(loadTaskDelivery + 2);
            }, 500)


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

    let profilePictureStyle = {
        style: "style1"
    };

    return (
        <>
            <Header />
            <Nav />
            <NavTask iSOnPage="true" />
            <Container>
                <Task>
                    <div>
                        <ProfilePicture
                            name={getUser().name} style={profilePictureStyle} />
                    </div>

                    <div>

                        <div id="infos" >
                            <span>Prof. Amanda</span>
                            <h1>{task.name}</h1>
                            <span>Data de entrega: {task.date_delivery} </span>
                        </div>

                        <div id="taskDescription" >
                            {task.description}

                        </div>
                        <div id="taskAttachments" >
                            <span>Materiais de referência</span>
                            <div id="links">
                                <span>Links</span>


                                {task.tasksAttachments !== undefined && (
                                    task.tasksAttachments.link !== "" && (
                                        <a 
                                            href={task.tasksAttachments.link} target="blank"  >
                                            <input 
                                                value={task.tasksAttachments.link} disabled />
                                        </a>
                                    )
                                )}

                                {task.tasksAttachments !== undefined && (
                                    task.tasksAttachments.link1 !== "" && (

                                        <a
                                            href={task.tasksAttachments.link1} target="blank"  >
                                            <input
                                                value={task.tasksAttachments.link1}
                                                disabled />
                                        </a>
                                    )
                                )}


                                {task.tasksAttachments !== undefined && (

                                    task.tasksAttachments.link2 !== "" && (
                                        <a href={task.tasksAttachments.link2} target="blank"  >

                                            <input
                                                value={task.tasksAttachments.link2}
                                                disabled />
                                        </a>
                                    )
                                )}


                            </div>
                            <div id="attachments" >
                                <span>Anexos</span>
                                {task.tasksAttachments !== undefined && (
                                    task.tasksAttachments.file !== "" && (
                                        <a
                                            href={task.tasksAttachments.file}
                                            target="blank"
                                            className="files" >Visualizar ou fazer download
                                        </a>
                                    )
                                )}
                                {task.tasksAttachments !== undefined && (
                                    task.tasksAttachments.file1 !== "" && (
                                        <a
                                            href={task.tasksAttachments.file1} className="files"
                                            target="blank" >Visualizar ou fazer download
                                        </a>
                                    )
                                )}
                                {task.tasksAttachments !== undefined && (
                                    task.tasksAttachments.file2 !== "" && (
                                        <a href={task.tasksAttachments.file2}
                                            target="blank" className="files" >Visualizar ou fazer download</a>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div id="commentSpots" >
                        <div id="taskComment" >
                            <span id="commentTitle" >Comentários:</span>
                            {taskDelivery[0] !== undefined && (
                                <span id="comment" >{taskDelivery[0].comment}</span>
                            )}
                        </div>


                        <div id="spots" >
                            <span>Total de pontos possíveis: &nbsp;
                                {task.spots !== null ? task.spots : "Não informado"}
                            </span>
                            {taskDelivery[0] !== undefined && (
                                taskDelivery[0].spots !== null && (
                                    <span>Total de pontos da avaliação: &nbsp;
                                        {taskDelivery[0].spots}
                                    </span>
                                )
                            )}
                        </div>
                    </div>



                </Task>
                <ContainerTaskDelivery>
                    <div id="title" className="titleFormatting" >
                        <span>Meu trabalho</span>
                    </div>

                    <form onSubmit={handleSubmit} >
                        {taskDelivery[0] === undefined && (
                            <div id="linksTaskDelivery" className="titleFormatting"  >
                                <span>Links</span>

                                {inputs.map(input => (
                                    <div class="inputs" >
                                        <Input
                                            type="url"
                                            id={input.id}
                                            width="380px"
                                            handler={handleInput}
                                            autocomplete="off"
                                        />

                                        <img src={plusSign} onClick={() => handleAddInputs()} alt="sinal de mais" />
                                    </div>
                                ))}
                            </div>
                        )}

                        {taskDelivery[0] !== undefined && (
                            <div id="deliveredTaskLinks" >
                                <span>Links</span>

                                {taskDelivery[0].link !== "" && (
                                    <a href={taskDelivery[0].link} target="blank" >
                                        <input value={taskDelivery[0].link} />
                                    </a>
                                )}

                                {taskDelivery[0].link1 !== "" && (
                                    <a href={taskDelivery[0].link1} target="blank" >
                                        <input value={taskDelivery[0].link1} />
                                    </a>
                                )}
                            </div>
                        )}


                        <div id="attachmentsTaskDelivery" className="titleFormatting"  >
                            <span>Anexos</span>
                            {inputsFile.map(inputFile => (
                                taskDelivery[0] === undefined && (
                                    <div className="files" >
                                        <div>
                                            <label>
                                                {inputFile.id === "file" && (
                                                    formTaskFile.file.name === undefined ? <span>Selecione um arquivo</span> : formTaskFile.file.name
                                                )}

                                                {inputFile.id === "file1" && (
                                                    formTaskFile.file1.name === undefined ? <span>Selecione um arquivo</span> : formTaskFile.file1.name

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
                                                onClick={() => handleAddInputsFile()}
                                                alt="Icone de adicionar mais um" />
                                        </div>
                                    </div>
                                )
                            ))}

                            {taskDelivery.map(taskDelivery => (
                                <div>
                                    {taskDelivery.file !== '' && (
                                        <div className="attachmentsDelivered" >
                                            <a
                                                href={taskDelivery.file}
                                                target="blank" >
                                                Visualizar ou fazer download</a>
                                        </div>
                                    )}
                                    {taskDelivery.file1 !== '' && (
                                        <div className="attachmentsDelivered" >
                                            <a
                                                href={taskDelivery.file1}
                                                target="blank">
                                                Visualizar ou fazer download</a>
                                        </div>
                                    )}
                                </div>
                            ))}


                            {/* {taskDelivery.file !== null && (
                                <div className="attachmentsDelivered" >
                                    <a href={taskDelivery.file} >Visualizar ou fazer download</a>
                                </div>
                            )}

                            {taskDelivery.file1 !== null && (
                                <div className="attachmentsDelivered" >
                                    <a href={taskDelivery.file1} >Visualizar ou fazer download</a>
                                </div> */}
                            {/* )} */}

                        </div>

                        {taskDelivery[0] === undefined && (
                            <div id="btn" >
                                <BtnSubmit
                                    text="Entregar" />
                            </div>
                        )}

                        {taskDelivery[0] !== undefined && (

                            <div id="taskMessageDelivered" >
                                <span>A tarefa {task.name}, foi entregue com sucesso</span>

                            </div>
                        )}


                    </form>


                </ContainerTaskDelivery>


            </Container>
        </>

    );
}

export default TaskDelivery;