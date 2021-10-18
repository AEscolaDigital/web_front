import Nav from "../../components/Nav";
import Header from "../../components/Header";
import React from 'react';
import imagePerfil from "../../assets/listStudentsTask/imagePerfil.svg";
import { Container, ContainerTask, MateriaisReferencias, ContainerImage, ContainerTexts, ReferenciaAnexo } from "./styles";
import NavTask from "../../components/NavTask";

function Teams() {

    return (
        <Container>
            <Header />
            <Nav />
            <NavTask />
            <ContainerTask>

                <ContainerImage>
                    <img src={imagePerfil} />

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
                    <h6>Materiáis de Referência</h6>
                    <div>
                        <p>batatinha frita 1,2,3... </p>
                            
                    </div>
                </ReferenciaAnexo>

            </ContainerTask>

        </Container>

    );
}

export default Teams;