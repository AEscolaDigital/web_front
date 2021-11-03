import { Container, ContainerVideoCall } from "./styles";
import Nav from "../../components/Nav";
import Call from "../../components/Call";

import Header from "../../components/Header";

function VideoCall() {

    return (
        <Container>
            <Header />
            <Nav />

            <ContainerVideoCall>
                <Call/>
            </ContainerVideoCall>
        </Container>

    );
}

export default VideoCall;