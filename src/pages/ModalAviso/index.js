import { Container, DivHeader, DivImage, DivFooter } from "./styles";
import Modal from "../../components/Modal";
import aviso from "../../assets/modal_aviso/modal-aviso.svg"
import BtnCancel from "../../components/BtnCancel"


function ModalAviso() {
    return (

        <Container>
            <Modal>
                <DivHeader>
                    <div>
                        <h2>Parabéns Fulano, acaba de realizar com sucesso o seu cadastro,<br /> para a escola Abobrinha.</h2>

                        <h2>Aguarde agora a escola Abobrinha fazer a validação das<br /> informações apresentas, para seu login ser liberado.</h2>
                    </div>
                </DivHeader>

                <DivImage>
                    <img src={aviso} />
                </DivImage>

                <DivFooter>
                    <div>
                        <h2>Desejamos sucesso em sua jornada de aprendizagem</h2>
                    </div>

                    <div className="button">
                        <BtnCancel text="Voltar ao login">
                        </BtnCancel>
                    </div>
                </DivFooter>

            </Modal>
        </Container>

    );
}

export default ModalAviso;