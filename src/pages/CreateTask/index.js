import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import NavTask from "../../components/NavTask";

import {
        ContainerTask, 
        MateriaisReferencias, 
        ContainerTexts,
        ReferenciaAnexo, 
        ActivityDeliveryContainer, 
        ContainerStudentAnexo, 
        Divs,
    } from "./styles";

import iconAnexo from "../../assets/iconAnexo/Group.svg"
// import iconClip from "../../assets/createTask/Vector.svg";

import React from 'react';


function CreateTask() {

    return (
        <>
            <Header />
            <Nav />
            <NavTask />

            <ContainerTask>
                <div className="titulo">
                    <p>Preencha os campos para adicionar uma tarefa</p>
                </div>

                <div>
                    <Input label="Nome da Tarefa" width="423px" height="63px" />
                    <div id="taskDescription" >
                        <label>Descrição da Tarefa:</label>
                        <textarea  rows="5" cols="30" />
                    </div>
                    <Input label="Data de entrega" type="date" height="63px" width="423px" />

                    <Input label="Pontos" type="number" width="423px" height="63px" />
                </div>
            </ContainerTask>

            <ActivityDeliveryContainer>

                <ContainerStudentAnexo>
                    <div>
                        <ReferenciaAnexo>
                            <div>
                                <h5>Materiáis de Referência</h5>
                            </div>

                            <div>
                                <p>https://developer.mozilla.org/pt-BR/docs/Web/HTML </p>
                                <div>
                                    <img src={iconAnexo} />
                                </div>
                            </div>
                        </ReferenciaAnexo>

                        <div id="imageAnexo">
                            {/* <img src={iconClip} /> */}
                            <p>Anexo</p>
                        </div>
                    </div>

                </ContainerStudentAnexo>
            </ActivityDeliveryContainer>


        </>

    );
}

export default CreateTask;