import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";

import { Container, TextContent, Title, TitleHighlight } from './styles';

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        A CARTEIRA DA NOVA GERAÇÃO
                        <br />
                    </TitleHighlight>
                    É para todas as idades!
                </Title>
                <TextContent>
                    O novo é constante, contrua conosco.
                </TextContent>
                <Button title="Abrir conta agora" variant="secundary" onClick={handleClickSignIn}></Button>
            </div>
            <div>
                <img src="https://ng.cash/_nuxt/img/home-ngcash-app.49e176e.png" alt="banner" />
            </div>
        </Container>
    </>)
}

export { Home }