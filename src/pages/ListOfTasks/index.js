import Nav from "../../components/Nav";
import Header from "../../components/Header";

import {
    ContainerTask,
    ContainerSelectionDiscipline,
    ContainerListTask,
} from "./styles";

import NavTask from "../../components/NavTask";
import Imagem from "../../assets/tasks/img_controle_videoGame.svg"
import selectTask from "../../assets/tasks/select_task.svg"

import { useEffect, useState } from 'react';
import { api } from "../../services/api";
import { useHistory, useLocation } from "react-router-dom";
import PermissionComponent from "../../components/PermissionComponent";
import { getUser } from "../../services/security";


function ListOfTasks() {

    const history = useHistory();
    const location = useLocation();


    const [discipline, setDiscipline] = useState([]);

    const [disciplineCreateTask, setDisciplineCreateTask] = useState(true);

    if (location.state !== undefined) {
        if (disciplineCreateTask) {
            setDisciplineCreateTask(false);
            setDiscipline(location.state.discipline);
        }
    }

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        let loadTasks = async () => {

            try {
                const response = await api.get(`tasks/list/${discipline.id}`);

                setTasks(response.data);

            } catch (error) {
                //httpError503(error.response);
            }
        };

        loadTasks();

    }, [discipline]);



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            history.push({
                pathname: `/createTask`,
                state: {
                    id: discipline.id,
                    name: discipline.name,
                }
            })
        } catch (error) {
            console.log(error);
        }
    }
    
    const [task, setTask] = useState();

    const handleSubmitTaskUserList = async (e) => {

        e.preventDefault();

        try {
            if (getUser().role !== "ROLE_USER") {
                history.push({
                    pathname: `/taskUserList`,
                    state: {
                    id: discipline.id,
                    name: discipline.name,
                    task: task
                    }
                })
            }else{
                history.push({
                    pathname: `/taskDelivery`,
                    state: {
                    id: discipline.id,
                    name: discipline.name,
                    task: task
                    }
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <Nav />
            <NavTask setProps={setDiscipline} />
            <ContainerTask>
                <PermissionComponent role="ROLE_ADMIN,ROLE_TEACHER" >

                    {discipline.id > 0 && (

                        <section>
                            <div id="typeTasks" >
                                <div>
                                    <span>Atribuída</span>
                                </div>
                                <div>
                                    <span>Concluída</span>
                                </div>
                            </div>


                            <form id="formCreateTask" onSubmit={handleSubmit} >
                                <button to="createTask" >
                                    <div id="addNewTasks" >
                                        Adicionar nova tarefa
                                    </div>
                                </button>
                            </form>


                        </section>
                    )}

                </PermissionComponent>


                <PermissionComponent role="ROLE_USER" >
                    <section>
                        <div id="typeTasks" >
                            <div>
                                <span>Atribuída</span>
                            </div>
                            <div>
                                <span>Concluída</span>
                            </div>
                        </div>


                    </section>
                </PermissionComponent>

                {discipline.id > 0 && (
                    <div id="nameDiscipline" >
                        <span>Tarefas da turma de {discipline.name}</span>
                    </div>
                )}

                {discipline.length === 0 && (
                    <ContainerSelectionDiscipline>
                        <img src={selectTask} alt="" />
                        <span>Selecione uma disciplina</span>
                        <span>para poder visualizar as tarefas</span>
                    </ContainerSelectionDiscipline>
                )}


                <ContainerListTask>
                    <form onSubmit={handleSubmitTaskUserList} >
                        {tasks.map(task =>
                            <button onClick={()=> setTask(task)} >
                                <div>
                                    <div>
                                        <img src={Imagem} alt="Image de controle de video game" />
                                    </div>
                                    <div className="textListTask" >{task.name}</div>
                                    <div className="dateTask" >
                                        <div>
                                            <span>Data de entrega</span>
                                            <span>{task.date_delivery}</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                         
                         
                        )}
                    </form>
                </ContainerListTask>

            </ContainerTask>
        </>

    );
}

export default ListOfTasks;