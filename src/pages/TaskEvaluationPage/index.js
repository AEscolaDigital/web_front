import Nav from "../../components/Nav";
import Header from "../../components/Header";
import React from 'react';
import { Container, ContainerTask, ContainerListTask } from "./styles";
import NavTask from "../../components/NavTask";
import BtnSubmit from "../../components/BtnSubmit";
import controle from "../../assets/taskEvaluationPage/controle.svg"
function taskEvaluationPage() {

    const tasks = [
        {
            title: "consumo de API (CEP)",
            finishdate: "14/10/2021",
            discipline: "matematica"
        },
        {
            title: "consumo de API (CEP)",
            finishdate: "14/10/2021",
            discipline: "matematica"
        },
        {
            title: "consumo de API (CEP)",
            finishdate: "14/10/2021",
            discipline: "matematica"
        },
       
    ];

    tasks.map(task => console.log(task.title));


    return (
        <Container>
            <Header />
            <Nav />
            <NavTask />

            <ContainerTask>
                <header>
                    <div>
                        <h3>Atribuída</h3>
                    </div>
                    <div>
                        <h3>Concluída</h3>
                    </div>
                    <div>
                        <BtnSubmit text="Adicionar tarefa"  />
                    </div>  
                    <hr />
                </header>
                <ContainerListTask>
                    {tasks.map(task => <div id="tarefa">
                        <div className="Image">
                            <img src={controle} />
                        </div>
                            <div className="textListTask">{task.title}</div>
                            <div className="dateTask">
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

    );
}

export default taskEvaluationPage;