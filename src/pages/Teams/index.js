import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Modal from "../../components/Modal";
import imgMathematics from "../../assets/teams/imgMathematics.svg"
import iconMore from "../../assets/teams/iconMore.svg"
import iconTeam from "../../assets/teams/iconTeam.svg"
import React from 'react';
import { Container, Section } from "./styles";
import Card from "../../components/Card";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import BtnCancel from "../../components/BtnCancel";

function Teams() {

    const [toogle, setToogle] = React.useState(true);
    const [value, setOpenClose] = React.useState('none');

    React.useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
    }, [toogle]);

    const [isModalVisible, setIsModalVisible] = React.useState(false)


    return (

        <Container>
            {isModalVisible ?
                <Modal title="Criar turma">
                    <div id="inputsModal" >
                        <Input className="labelWhite" label="Nome da turma" />
                        <Input className="labelWhite" label="Nome do professor" />
                        <Input className="labelWhite" label="Disciplina" />
                    </div>
                    <div id="btnModal" >
                        <div onClick={() => setIsModalVisible(false)} >
                            <BtnCancel text="Cancelar" />
                        </div>
                        <BtnSubmit text="Próximo" />
                    </div>
                </Modal> : null}
            <Header />
            <Nav />
            <div id="btnCreateTeam" >
                <a onClick={() => setIsModalVisible(true)}> <img src={iconTeam} /> <span>Criar Turma</span> </a>
            </div>
            <div id="titleYourTeams" >
                <h1>Suas turmas</h1>
            </div>
            <Section>
                <div>
                    <div>
                        <img src={iconMore} onClick={e => setToogle(state => !state)} />

                        <Card display={value} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} onClick={e => setToogle(state => !state)} />

                        <Card display={value} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} onClick={e => setToogle(state => !state)} />

                        <Card display={value} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={iconMore} />
                    </div>

                    <img src={imgMathematics} />

                    <div>
                        <div>Matemática</div>
                        <span>Prof. Guilherme</span>
                    </div>
                </div>


            </Section>
        </Container>

    );
}

export default Teams;