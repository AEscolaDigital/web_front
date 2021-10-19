import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";

import React from 'react';
import iconClip from "../../assets/createTask/Vector.svg";
import {
    Container, ContainerTask, MateriaisReferencias, ContainerTexts,
    ReferenciaAnexo, ActivityDeliveryContainer, ContainerStudentAnexo, Divs,

} from "./styles";
import NavTask from "../../components/NavTask";

function CreateTask() {

    return (
        <Container>
            <Header />
            <Nav />
            <NavTask />

            <ContainerTask>
                <p>Preencha os campos para adicionar uma tarefa</p>

                <Input label="Nome da Tarefa"/>

                <Input label="Descrição da Tarefa"/>

                <Input label="Data de entrega"/>

                <Input label="Pontos"/>

            </ContainerTask>

            <ActivityDeliveryContainer>

                <ContainerStudentAnexo>
                    <div>
                        <ReferenciaAnexo>
                            <h5>Materiáis de Referência</h5>
                            <div>
                                <p>Aqui vai um arquivo de anexo... </p>
                            </div>
                        </ReferenciaAnexo>

                        <div id="imageAnexo">
                            <img src={iconClip} />
                            <p>Anexo</p>
                        </div>
                    </div>

                </ContainerStudentAnexo>
            </ActivityDeliveryContainer>


        </Container>

    );
}

export default CreateTask;