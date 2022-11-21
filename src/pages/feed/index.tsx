import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, TitleHighlight, Title } from './styles';

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>transferências</Title>
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>contatos favoritos</TitleHighlight>
                <UserInfo name="Nome Usuário" image="https://images.unsplash.com/photo-1615242586099-ad758c8a24cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
                <UserInfo name="Nome Usuário" image="https://images.unsplash.com/photo-1615242586099-ad758c8a24cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
                <UserInfo name="Nome Usuário" image="https://images.unsplash.com/photo-1615242586099-ad758c8a24cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
                <UserInfo name="Nome Usuário" image="https://images.unsplash.com/photo-1615242586099-ad758c8a24cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>
            </Column>
        </Container>
    </>)
}

export { Feed }