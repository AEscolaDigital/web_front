import Nav from "../../components/Nav";
import Header from "../../components/Header";
import React from 'react';

import { Container, ContainerTask } from "./styles";
import NavTask from "../../components/NavTask";
import Imagem from "../../assets/student_task/img_controle_videoGame.svg"

function Teams() {

    return (
        <Container>
            <Header />
            <Nav />
            <NavTask/>
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

                <body>
                    <div>
                        <img src={Imagem} />
                    </div>

                    <div> 
                        <span> Consumo de API ( CEP )</span>
                    </div>

                    <div> 
                        <div>
                            <span>Data da Entrega</span>
                        </div>
                        
                        <div>
                            <span> 14 / 10 / 2021 </span>
                        </div>
                    </div>
                </body>

                <body>
                    <div>
                        <img src={Imagem} />
                    </div>

                    <div> 
                        <span> Linktree</span>
                    </div>

                    <div> 
                        <div>
                            <span>Data da Entrega</span>
                        </div>
                        
                        <div>
                            <span> 14 / 10 / 2021 </span>
                        </div>
                    </div>
                </body>

                <body>
                    <div>
                        <img src={Imagem} />
                    </div>

                    <div> 
                        <span>Aplicação: Calculadora IMC</span>
                    </div>

                    <div> 
                        <div>
                            <span>Data da Entrega</span>
                        </div>
                        
                        <div>
                            <span> 14 / 10 / 2021 </span>
                        </div>
                    </div>
                </body>
            </ContainerTask>
             
        </Container>

    );
}

export default Teams;