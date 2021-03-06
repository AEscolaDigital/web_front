import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
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
import Swal from "sweetalert2";

function CorrectionTask() {

    const location = useLocation();
    const teacherName = location.state.disciplina.teacher_name;

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
    const [loadTaskDelivery1, setLoadTaskDelivery] = useState(0);

    useEffect(() => {

        let loadTaskDelivery = async () => {

            try {
                const response = await api.get(`taskdelivery/user_id/${location.state.user.id}/task_id/${location.state.task.id}`);

                setTaskDelivery(response.data[0]);

            } catch (error) {
                //httpError503(error.response);
            }
        };

        loadTaskDelivery();


    }, [loadTaskDelivery1, location]);

    const [formCorrectionTask, setCorrectionTask] = useState({
        spots: "",
        comment: "",

    });

    const handleInput = (e) => {
        setCorrectionTask({ ...formCorrectionTask, [e.target.id]: e.target.value });
    };

    const handleTextarea = (e) => {
        setCorrectionTask({ ...formCorrectionTask, [e.target.id]: e.target.value });
    }

    const [status, setStatus] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await api.put(`/taskdelivery/${taskDelivery.id}`, {
                spots: formCorrectionTask.spots,
                comment: formCorrectionTask.comment,
                status: status
            });

            successAlert('Tarefa corrigida!');
            setTimeout(() => {
                setLoadTaskDelivery(loadTaskDelivery1 + 2);
            }, 500);
        } catch (error) {
            alert(error)
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

    let profilePictureStyle = {
        style: "style1"
    };

    return (
        <>
            <Header />
            <Nav />
            <NavTask iSOnPage={true} />
            <Container>
                <Task>
                    <div>
                        <ProfilePicture
                            name={getUser().name}
                            style={profilePictureStyle}
                        />
                    </div>

                    <div>

                        <div id="infos" >
                            <span>Prof. {teacherName}</span>
                            <h1>{task.name}</h1>
                            <span>Data de entrega: {task.date_delivery} </span>
                        </div>

                        <div id="taskDescription" >
                            {task.description}

                        </div>
                        <div id="taskAttachments" >
                            <span>Materiais de refer??ncia</span>
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
                    <div>
                        <span>Total de pontos poss??veis:                                 {task.spots !== null ? task.spots : "N??o informado"}
                        </span>
                    </div>

                </Task>
                {taskDelivery !== undefined && (
                    <TaskDelivery>
                        <div id="infosTaskDelivery" >

                            <ProfilePicture
                                style={profilePictureStyle}
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

                                {taskDelivery.link !== "" && (
                                    <a href={taskDelivery.link} target="blank" >
                                        <input value={taskDelivery.link} />
                                    </a>
                                )}

                                {taskDelivery.link1 !== "" && (
                                    <a href={taskDelivery.link1} target="blank" >
                                        <input value={taskDelivery.link1} />
                                    </a>
                                )}

                            </div>

                            <div id="attachmentsUser" >
                                <span>Anexos</span>

                                {taskDelivery.file !== "" && (
                                    <a
                                        href={taskDelivery.file}
                                        target="blank"
                                        className="files" > Visualizar ou fazer download </a>
                                )}

                                {taskDelivery.file1 !== "" && (
                                    <a
                                        href={taskDelivery.file1}
                                        target="blank"
                                        className="files" > Visualizar ou fazer download</a>
                                )}

                            </div>

                        </div>

                        <TaskComment onSubmit={handleSubmit}>
                            <div id="spots" >
                                <Input
                                    id="spots"
                                    width="200px"
                                    label="Pontos da avalia????o"
                                    value={taskDelivery.spots}
                                    handler={handleInput} />
                            </div>

                            <label>Coment??rio
                                <textarea
                                    id="comment"
                                    cols="30"
                                    rows="10"
                                    onChange={handleTextarea}
                                    required
                                    value={taskDelivery.comment}
                                    autocomplete="off"
                                    maxlength="755"
                                />
                            </label>
                            {taskDelivery.status !== 2 && (
                                <div id="buttons" >
                                    <BtnSubmit
                                        id="btnGiveBack"
                                        text="Devolver" />

                                    <div onClick={() => setStatus(status + 2)} >
                                        <BtnSubmit
                                            text="Corrigido" />
                                    </div>
                                </div>
                            )}

                            {taskDelivery.status === 2 && (
                                <div id="fixedTask" >
                                    <span>A tarefa do aluno {location.state.user.name}, j?? foi corrigido</span>
                                </div>
                            )}

                        </TaskComment>
                    </TaskDelivery>
                )}

                {taskDelivery === undefined && (
                    <TaskNotDelivery>
                        <div id="user" >
                            <ProfilePicture
                                style={profilePictureStyle}
                                name={location.state.user.name}
                                profile_picture={location.state.user.profile_picture} />
                            <div id="username" >
                                <span>{location.state.user.name}</span>

                            </div>
                        </div>

                        <div id="undeliveredTaskMessage" >
                            Tarefa n??o entregue, at?? o momento!
                        </div>

                    </TaskNotDelivery>
                )}


            </Container>
        </>

    );
}

export default CorrectionTask;