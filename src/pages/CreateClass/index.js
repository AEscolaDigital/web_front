import { Container, DivTurma, DivImage, DivMembro } from "./styles";
import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import membro from "../../assets/createclass/membro.svg";
import BtnSubmit from "../../components/BtnSubmit";
import BtnCancel from "../../components/BtnCancel";
import lupa from "../../assets/createclass/lupa.svg";
import excel from "../../assets/createclass/excel.svg"

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
                        <Input label="Nome da turma" type="text" width="480px" height="55px" />
                    </div>

                    <div>
                        <img src={excel} />
                    </div>
                </div>
            </DivTurma>

            <DivMembro>
                <div>
                    <div>
                        <h1>Adicionar Membros</h1>

                        <div>
                            <BtnSubmit text="Adicionar"  />
                        </div>
                    </div>

                    <div className="membro">
                        <Input width="480px" height="30px"/>    
                        <div className="lupa">
                             <img src={lupa} />    
                        </div>                   
                    </div>
                </div>
            </DivMembro>

            <DivImage>
                <div>
                    <img src={membro} />
                </div>

                <div>
                    <BtnCancel text="Voltar" />
                </div>

                <div>
                    <BtnSubmit text="Criar" />
                </div>
            </DivImage>
        </Container>

    );
}

export default CreateClass;