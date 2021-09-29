import { Container, DivHeader, DivImage } from "./styles";
import Modal from "../../components/Modal";
import aviso from "../../assets/modal_aviso/modal-aviso.svg"



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

                


            </Modal>
        </Container>

    );
}

export default ModalAviso;