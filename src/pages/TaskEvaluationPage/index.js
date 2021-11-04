import Nav from "../../components/Nav";
import Header from "../../components/Header";
import React from 'react';
import { Container, ContainerTask } from "./styles";
import NavTask from "../../components/NavTask";
import BtnSubmit from "../../components/BtnSubmit";
function taskEvaluationPage() {

    return (
        <Container>
            <Header />
            <Nav />
            <NavTask />

            <ContainerTask>
                <div>
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
                </div>
            </ContainerTask>

        </Container>

    );
}

export default taskEvaluationPage;