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
    TaskComment

} from "./styles";

import NavTask from "../../components/NavTask";
import { api } from "../../services/api";
import { useEffect, useState } from 'react';


function CorrectionTask() {

    const [discipline, setDiscipline] = useState([]);


    const [task, setTask] = useState([]);

    console.log();

    useEffect(() => {

        let loadTasks = async () => {

            try {
                const response = await api.get(`tasks/3`);

                setTask(response.data[0]);

            } catch (error) {
                //httpError503(error.response);
            }
        };

        loadTasks();

    }, []);


    return (
        <>
            <Header />
            <Nav />
            <NavTask setProps={setDiscipline} />
            <Container>
                <Task>


                    <div>
                        <img src={Image} />
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
                                    <a href={task.tasksAttachments !== undefined && (task.tasksAttachments.link)} >
                                        <input value={task.tasksAttachments !== undefined && (task.tasksAttachments.link)} />
                                    </a>
                                    <a href="http://localhost:3000/correctionTask" >
                                        http://localhost:3000/correctionTask
                                    </a>
                                    <a href="http://localhost:3000/correctionTask" >
                                        http://localhost:3000/correctionTask
                                    </a>
                                </div>
                                <div>
                                    <span>Anexos</span>

                                </div>
                            </div>
                        </div>
              

                </Task>

                <TaskDelivery>
                    <div id="infosTaskDelivery" >
                        <img src={Image} />
                        <div>
                            <span id="name" >Soeli Kristin</span>
                            <span id="date" >Data de entrega: 18/10/2021</span>
                        </div>
                    </div>
                    <div id="taskAttachmentsUser" >
                        <div id="linksUser" >
                            <span>Links</span>
                            <a href="http://localhost:3000/correctionTask" >
                                http://localhost:3000/correctionTask
                            </a>
                            <a href="http://localhost:3000/correctionTask" >
                                http://localhost:3000/correctionTask
                            </a>
                            <a href="http://localhost:3000/correctionTask" >
                                http://localhost:3000/correctionTask
                            </a>
                        </div>

                    </div>
                    <TaskComment>
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

            </Container>
        </>

    );
}

export default CorrectionTask;