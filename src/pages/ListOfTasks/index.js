import Nav from "../../components/Nav";
import Header from "../../components/Header";

import {
    Container,
    ContainerTask,
    ContainerListTask
} from "./styles";

import NavTask from "../../components/NavTask";
import Imagem from "../../assets/student_task/img_controle_videoGame.svg"

import { useEffect, useState } from 'react';
import { api } from "../../services/api";

function ListOfTasks() {

    const [disciplineId, setDisciplineId] = useState();

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        let loadTasks = async () => {

            try {
                const response = await api.get(`tasks/${disciplineId}`);

                setTasks(response.data);

            } catch (error) {
                //httpError503(error.response);
            }
        };

        loadTasks();

    }, [disciplineId]);

    return (
        <>
            <Header />
            <Nav />
            <NavTask  setProps={setDisciplineId} />
            <Container>
                <ContainerTask>
                    <section>
                        <div>
                            <span>Tarefas da turma de matématica</span>
                        </div>

                        <div>
                            <span>Atribuída</span>
                        </div>
                        <div>
                            <span>Concluída</span>
                        </div>
                    </section>

                    <ContainerListTask>
                        {tasks.map(task =>
                            <div>
                                <div>
                                    <img src={Imagem} alt="sssssss" />
                                </div>
                                <div className="textListTask" >{task.name}</div>
                                <div className="dateTask" >
                                    <div>
                                        <span>Data de entrega</span>
                                        <span>{task.date_delivery}</span>
                                    </div>
                                </div>
                            </div>
                        )}


                    </ContainerListTask>

                </ContainerTask>

            </Container>
        </>

    );
}

export default ListOfTasks;