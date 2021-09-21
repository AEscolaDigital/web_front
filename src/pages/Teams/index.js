import Nav from "../../components/Nav";
import Header from "../../components/Header";
import Input from "../../components/Input";
import BtnSubmit from "../../components/BtnSubmit";
import BtnCancel from "../../components/BtnCancel";
import Modal from "../../components/Modal";
import { Container } from "./styles";

function Teams(){
    return(
        <Container>


          {/* <Modal title="Criar turma" body={
              <Input label="Nome completo"/>

          } >
          </Modal> */}
          {/* <BtnCancel text="Cancelar" />
          <BtnSubmit text="Enviar"/> */}
          <Header/>
          <Nav/> 
           
        </Container>

    );
}

export default Teams;
