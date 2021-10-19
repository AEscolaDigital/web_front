import React from 'react';
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import NavTask from "../../components/NavTask";
import Image from "../../assets/taskReturn/Image.svg";
import BtnSubmit from "../../components/BtnSubmit";
import iconClip from "../../assets/taskReturn/iconClip.svg";
import {
    Container, ContainerTask, MateriaisReferencias, ContainerImage, ContainerTexts,
    ReferenciaAnexo, DeliveryTask, ActivityDeliveryContainer, ContainerStudentAnexo, Divs,
    ContainerGlobal1, ContainerBtn, ContainerComent

} from "./styles";


function TaskReturn() {

    return (
        <Container>
            <Header />

            <Nav />
            <NavTask />

            <ContainerTask>


                <ContainerGlobal1>



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
                </ContainerGlobal1>



                <DeliveryTask>
                    <ContainerBtn>
                        <BtnSubmit text="Entregar novamente" />
                    </ContainerBtn>

                    <div>
                        <p>Devolvida em sex., 18 de jun. 00:34</p>
                    </div>

                    <ContainerComent>
                        <p>Comentários:</p>
                        <p>Show!!!</p>
                    </ContainerComent>

                    <h4>Pontos</h4>
                    <p>Sem Pontos</p>

                </DeliveryTask>



            </ContainerTask>



            <ActivityDeliveryContainer>

                <ContainerStudentAnexo>
                    <div>
                        <h4>Meu trabalho</h4>

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


                </ContainerStudentAnexo>

            </ActivityDeliveryContainer>


        </Container>

    );

}


export default TaskReturn;