import Nav from "../../components/Nav";
import Header from "../../components/Header";
import React from 'react';

import { Container, ContainerTask } from "./styles";
import NavTask from "../../components/NavTask";

function taskEvaluationPage() {

    return (
        <Container>
            <Header />
            <Nav />
            <NavTask/>
            <ContainerTask>
                <div></div>
            </ContainerTask>
             
        </Container>

    );
}

export default taskEvaluationPage;