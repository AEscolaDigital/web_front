import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import Image from "../../assets/listStudentsTask/Image.svg";
import iconClip from "../../assets/listStudentsTask/Vector.png";
import {
    Container,
    Task,
    TaskDelivery,
    TaskComment,
    TaskNotDelivery
} from "./styles";

import NavTask from "../../components/NavTask";
import ProfilePicture from "../../components/ProfilePicture";

import { api } from "../../services/api";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import { getUser } from "../../services/security";

function CorrectionTask() {

    const location = useLocation();

    const [discipline, setDiscipline] = useState([]);

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

    }, []);

    const [taskDelivery, setTaskDelivery] = useState([]);

    useEffect(() => {

        let loadTaskDelivery = async () => {

            try {
                const response = await api.get(`taskdelivery/user_id/${location.user.id}/task_id/${location.task.id}`);

                setTaskDelivery(response.data[0]);

            } catch (error) {
                //httpError503(error.response);
            }
        };

        loadTaskDelivery();

    }, []);

    console.log(location.state.user);


    return (
        <>
            <Header />
            <Nav />
            <NavTask setProps={setDiscipline} />
            <Container>
                <Task>
                    <div>
                        <ProfilePicture
                            name={getUser().name} style="style1" />
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
                                        <a href={task.tasksAttachments.link} target="_blank"  >
                                            <input value={task.tasksAttachments.link} disabled />
                                        </a>
                                    )
                                )}

                                {task.tasksAttachments !== undefined && (
                                    task.tasksAttachments.link1 !== "" && (

                                        <a href={task.tasksAttachments.link} target="_blank"  >
                                            <input value={task.tasksAttachments.link1} disabled />
                                        </a>
                                    )
                                )}


                                {task.tasksAttachments !== undefined && (

                                    task.tasksAttachments.link2 !== "" && (
                                        <a href={task.tasksAttachments.link2} target="_blank"  >

                                            <input
                                                value={task.tasksAttachments.link2}
                                                disabled />
                                        </a>
                                    )
                                )}

                            </div>
                            <div id="attachments" >
                                <span>Anexos</span>

                            </div>
                        </div>
                    </div>


                </Task>
                {taskDelivery.tasksAttachments !== undefined && (
                    <TaskDelivery>
                        <div id="infosTaskDelivery" >

                            <ProfilePicture
                                style="style1"
                                name={location.state.user.name}
                                profile_picture={location.state.user.profile_picture} />

                            <div>
                                <span id="name" >{location.state.user.name}</span>
                                <span id="date" >Data de entrega: {taskDelivery.delivery_date}</span>
                            </div>
                        </div>
                        <div id="taskAttachmentsUser" >
                            <div id="linksUser" >
                                <span>Links</span>

                                taskDelivery.link !== undefined && (
                                <a href={taskDelivery.link} >
                                    {taskDelivery.link}
                                </a>
                                )

                                taskDelivery.link1 !== undefined && (
                                <a href={taskDelivery.link1} >
                                    {taskDelivery.link1}
                                </a>
                                )

                                taskDelivery.link2 !== undefined && (
                                <a href={taskDelivery.link2} >
                                    {taskDelivery.link2}
                                </a>
                                )


                            </div>

                            <div id="attachmentsUser" >
                                <span>Anexos</span>
                            </div>

                        </div>

                        <TaskComment>
                            <h1>AQUIII</h1>
                            <div id="spots" >
                                <Input id="spots" width="200px" label="Pontuação" />
                            </div>
                            <label>Comentário</label>
                            <textarea cols="30" rows="10" />
                            <div id="buttons" >
                                <BtnSubmit text="Devolver" />

                                <BtnSubmit text="Corrigido" />
                            </div>
                        </TaskComment>
                    </TaskDelivery>
                )}

                {taskDelivery.tasksAttachments === undefined && (
                    <TaskNotDelivery>
                        <div>
                            Tarefa não entregue, até o momento!
                        </div>
                
                    </TaskNotDelivery>
                )}


            </Container>
        </>

    );
}

export default CorrectionTask;