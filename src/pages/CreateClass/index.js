import { Container, DivTurma, DivImage, DivMembro } from "./styles";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import membro from "../../assets/createclass/membro.svg";
import BtnSubmit from "../../components/BtnSubmit";

function CreateClass() {
    return (

        <Container>
            <Header />
            <Nav />

            <DivTurma>
                <div>
                    <header>
                        <h1>Criar uma turma</h1>
                    </header>
                    <div>
                        <Input label="Nome da turma" type="text" width="433px" height="55px" />
                    </div>
                </div>
            </DivTurma>

            <DivMembro>

                <div>
                    <div>
                        <h1>Adicionar Membro</h1>
                    </div>

                    <div className="membro">
                        <Input width="433px" height="30px" />
                    </div>
                </div>
            </DivMembro>

            <DivImage>
                <div>
                    <img src={membro} />
                </div>
            </DivImage>



        </Container>

    );
}

export default CreateClass;