import { Container, DivHeader, DivTurmas, DivBtn } from "./styles";
import Modal from "../../components/Modal";
import Nav from "../../components/Nav/";
import Header from "../../components/Header";
import foto from "../../assets/createClass/foto.svg";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import BtnCancel from "../../components/BtnCancel";

function CreateClass() {

    return (
        <Container>

            <Modal>
                <DivHeader>
                    <div>
                        <h1>Criar Turma</h1>
                    </div>

                    <div>
                        <img src={foto} />
                    </div>
                </DivHeader>

                <DivTurmas>
                    <div>
                        <Input type="time" label="Horário de aula" min="07:00" max="18:00" ></Input>
                        <Input id="date" type="date" label="Data de início"></Input>
                        <Input id="date" type="date" label="Data de término"></Input>
                    </div>
                </DivTurmas>

                <DivBtn>

                    <div>
                        <BtnSubmit text="Próximo"></BtnSubmit>
                    </div>

                    <div>
                        <BtnCancel text="Anterior"></BtnCancel>
                    </div>
                </DivBtn>

            </Modal>

            <Header>
            </Header>

            <Nav>
            </Nav>
        </Container>
    );
}
export default CreateClass;