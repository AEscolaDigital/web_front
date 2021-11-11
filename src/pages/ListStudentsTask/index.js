import Nav from "../../components/Nav";
import Header from "../../components/Header";
import React from 'react';

import { Container, ContainerTask, ContainerListTask } from "./styles";
import NavTask from "../../components/NavTask";
import Imagem from "../../assets/student_task/img_controle_videoGame.svg"

function Teams() {

    const tasks = [
        {
            title: "consumo de API (CEP)",
            finishdate: "14/10/2021",
            discipline: "matematica"
        },
        {
            title: "Random task",
            finishdate: "17/10/2021",
            discipline: "Projetos"
        },
        {
            title: "Random task",
            finishdate: "17/10/2021",
            discipline: "Projetos"
        },
        {
            title: "Random task",
            finishdate: "17/10/2021",
            discipline: "Projetos"
        },
        {
            title: "Random task",
            finishdate: "17/10/2021",
            discipline: "Projetos"
        },
        {
            title: "Random task",
            finishdate: "17/10/2021",
            discipline: "Projetos"
        },
        {
            title: "Random task",
            finishdate: "17/10/2021",
            discipline: "Projetos"
        },
        {
            title: "Random task",
            finishdate: "17/10/2021",
            discipline: "Projetos"
        },
        {
            title: "Random task",
            finishdate: "17/10/2021",
            discipline: "Projetos"
        },
        {
            title: "consumo de API ",
            finishdate: "18/10/2021",
            discipline: "Projetos"
        }
    ];

    tasks.map(task => console.log(task.title));

    return (
        <>
            <Header />
            <Nav />
            <NavTask />
            <Container>
                <ContainerTask>
                    <header>
                        <div>
                            <span>Tarefas da turma de matématica</span>
                        </div>

                        <div>
                            <span>Atribuída</span>
                        </div>
                        <div>
                            <span>Concluída</span>
                        </div>
                    </header>

                    <ContainerListTask>
                        {tasks.map(task => <div>
                            <div>
                                <img src={Imagem} />
                            </div>
                                <div className="textListTask" >{task.title}</div>
                                <div className="dateTask" >
                                    <div>
                                        <span>Data de entrega</span>
                                        <span>{task.finishdate}</span>
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

export default Teams;