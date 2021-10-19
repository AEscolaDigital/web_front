import React from 'react';
import Image from "../../assets/taskReturn/Image.svg";
import iconClip from "../../assets/taskReturn/iconClip.svg";
import {
    Container, ContainerTask, MateriaisReferencias, ContainerImage, ContainerTexts,
    ReferenciaAnexo, ActivityDeliveryContainer, ContainerStudent, ContainerStudentAnexo, Divs,
    ContainerBtn
} from "./styles";


function TaskReturn() {

    return (
        <Container>
            <Header/>
            <Nav/>
            <NavTask/>

        </Container>

    );

}


export default TaskReturn;