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

                setTaskDelivery(response.data[0]);

            } catch (error) {
                //httpError503(error.response);
            }
        };

        loadTaskDelivery();

    }, [loadTaskDelivery, location]);

    const [inputs, setInput] = useState([{ id: 'link' }])

    const [filesMax, setFilesMax] = useState(1)

    const handleAddInputs = async () => {

        const itensCopy = Array.from(inputs);

        if (inputs.length < 2) {
            itensCopy.push({ id: `link${filesMax}` });

            setFilesMax(filesMax + 1)
        }

        if (inputs.length === 2) {
            alert("O número máximo é de 2 links")
        }

        setInput(itensCopy);

    }

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
            data.append("file", "");
            data.append("file1", "");
            data.append("file2", "");
            data.append("task_id", location.state.task.id);



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
                                        <a href={task.tasksAttachments.link} target="blank"  >
                                            <input value={task.tasksAttachments.link} disabled />
                                        </a>
                                    )
                                )}

                                {task.tasksAttachments !== undefined && (
                                    task.tasksAttachments.link1 !== "" && (

                                        <a href={task.tasksAttachments.link} target="blank"  >
                                            <input value={task.tasksAttachments.link1} disabled />
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
                                        <a href={task.tasksAttachments.file} >Visualizar aquivo 1</a>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        {taskDelivery !== undefined && (

                            <div id="taskComment" >
                                <span id="commentTitle" >Comentários:</span>
                                <span id="comment" >{taskDelivery.comment}</span>
                            </div>
                        )}
                    </div>


                </Task>
                <ContainerTaskDelivery>
                    <div id="title" className="titleFormatting" >
                        <span>Meu trabalho</span>
                    </div>

                    <form onSubmit={handleSubmit} >
                        {taskDelivery === undefined && (
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

                        {taskDelivery !== undefined && (
                            <div id="deliveredTaskLinks" >
                                <span>Links</span>

                                {taskDelivery.link !== "" && (
                                    <a href={taskDelivery.link} target="blank" >
                                        <input value={taskDelivery.link} />
                                    </a>
                                )}

                                {taskDelivery.link1 !== "" && (
                                    <a href={taskDelivery.link1} >
                                        <input value={taskDelivery.link1} />
                                    </a>
                                )}
                            </div>
                        )}


                        <div id="attachmentsTaskDelivery" className="titleFormatting"  >
                            <span>Anexos</span>

                        </div>

                        {taskDelivery === undefined && (
                            <div id="btn" >
                                <BtnSubmit
                                    text="Entregar" />
                            </div>
                        )}

                        {taskDelivery !== undefined && (

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