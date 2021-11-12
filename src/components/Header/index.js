import { Container, Card } from "./styles";
import profile from "../../assets/header/profile.png"
import iconeMagnifier from "../../assets/header/iconeMagnifier.svg"
import configurationIcon from "../../assets/header/configurationIcon.svg"
import puzzleIcon from "../../assets/header/puzzleIcon.svg"
import downloadIcon from "../../assets/header/downloadIcon.svg"
import iconExit from "../../assets/header/iconExit.svg"
import React from 'react';
// import { Link } from "react-router-dom";

function Header() {

    const [toogle, setToogle] = React.useState(true);
    const [value, setOpenClose] = React.useState('none');
    const [valueHeight, setHeight] = React.useState('0px');

    React.useEffect(() => {
        setOpenClose(() => toogle ? 'none' : 'block');
        setHeight(() => toogle ? '0px' : '365px');
    }, [toogle]);

    return (
        <Container>
            <div></div>
            <div>
                <input type="text" placeholder="Pesquisar" />
                <button type="submit">
                    <img src={iconeMagnifier} alt="ícone de uma lupa" />
                </button>
            </div>

            <img src={profile} onClick={e => setToogle(state => !state)} alt="Sua imagem de perfil" />

            <Card style={{
                height: valueHeight,
            }}>
                <div style={{
                    display: value,
                }} >
                    <img src={profile} alt="Sua imagem de perfil" />
                    <div>Jaqueline Silva</div>
                    <div>jaqueline@gmail.com</div>
                    <hr/>
                    {/* <Link to="/teams" > */}
                        <div>
                            <img src={configurationIcon} alt="Icone de configuração"  />
                        </div>
                        <div>Configuraçãoes</div>
                    {/* </Link> */}
                    {/* <Link to="/teams"> */}
                        <div>
                            <img src={puzzleIcon} alt="Ícone de quebra-cabeça" />
                        </div>
                        <div>Atalhos</div>
                    {/* </Link> */}
                    {/* <Link to="/teams" > */}
                        <div>
                            <img src={downloadIcon} alt="Ícone de download" />
                        </div>
                        <div>Dowload do aplicativo</div>
                    {/* </Link> */}
                    <hr/>
                    {/* <Link to="/" > */}
                        <div>
                            <img src={iconExit} alt="Icone de sair" />
                        </div>
                        <div>Saída</div>
                    {/* </Link> */}
                </div>
            </Card>
        </Container>
    );
}

export default Header;