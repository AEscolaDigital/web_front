import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnCancel from "../../components/BtnCancel";
import BtnSubmit from "../../components/BtnSubmit";
import React from 'react';
import Image from "../../assets/listStudentsTask/Image.svg";
import iconClip from "../../assets/listStudentsTask/Vector.png";
import {
    Container, ContainerTask, MateriaisReferencias, ContainerImage, ContainerTexts,
    ReferenciaAnexo, ActivityDeliveryContainer, ContainerStudent, ContainerStudentAnexo, Divs
} from "./styles";
import NavTask from "../../components/NavTask";

function Teams() {

    return (
        <Container>
            <Header />
            <Nav />
            <NavTask />
            <ContainerTask>

                <ContainerImage>
                    <img src={Image} />

                    <p>Prof° Amanda </p>
                    <p>14/07/2004</p>
                </ContainerImage>

                <ContainerTexts>
                    <h2> Consumo de API ( CEP )</h2>
                    <p>Data de entrega: 14/07/2004</p>
                </ContainerTexts>


                <MateriaisReferencias>
                    <p>
                        Consumir API de CEP
                    </p>

                    <div>
                        <p>
                            Viacep (https://youtu.be/imk6Y0viabg)
                            Postmon (https://postmon.com.br/)
                            CEP Aberto (https://cepaberto.com/)
                        </p>
                    </div>
                    <p>
                        Entregar o link do grithub, lembrando de habilitar o gitpage
                    </p>

                </MateriaisReferencias>

                <ReferenciaAnexo>
                    <h5>Materiáis de Referência</h5>
                    <div>
                        <p>Aqui vai um arquivo de anexo... </p>
                    </div>
                </ReferenciaAnexo>

            </ContainerTask>

            <ActivityDeliveryContainer>
                <ContainerStudent>
                    <img src={Image} />

                    <p>Emerson Silva </p>

                </ContainerStudent>

                <ContainerStudentAnexo>
                    <div>
                        <h4>Anexo</h4>

                        <div id="enexos" >

                            <Divs>
                                <p>Aqui vai um arquivo de anexo... </p>
                            </Divs>

                            <Divs>
                                <p>Aqui vai um arquivo de anexo... </p>
                            </Divs>
                        </div>


                        <div id="imageAnexo">
                            <img src={iconClip} />
                            <p>Anexo</p>
                        </div>
                    </div>

                    <div>
                        <div id="pontuacao">
                            <Input label="Pontuação" />
                        </div>
                    </div>
                </ContainerStudentAnexo>

                <Input label="Comentários" width="600px" height="150px"/>


                <BtnSubmit text="Corrigido" />
                <BtnCancel text="Devolver" />

            </ActivityDeliveryContainer>


        </Container>

    );
}

export default Teams;