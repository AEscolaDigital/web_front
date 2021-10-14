import Nav from "../../components/Nav";
import Header from "../../components/Header";
import React from 'react';

import { Container } from "./styles";
import NavTask from "../../components/NavTask";

function Teams() {

    return (
        <Container>
            <Header />
            <Nav />
            <NavTask/>
             
        </Container>

    );
}

export default Teams;