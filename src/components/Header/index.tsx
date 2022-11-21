import React from 'react';
import { FiArrowRight, FiDollarSign } from 'react-icons/fi'

import { BuscarInputContainer, Container, Input, Menu, MenuRight, Row, UserPicture, Wrapper } from './styles';
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {
  return (
    <Wrapper>
        <Container>
            <Row>
                {autenticado ? (
                <>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Saldo:</Menu>
                    <Menu><FiDollarSign />100,00</Menu>
                </>
                ) : null}
            </Row>
            <Row>
                {autenticado ? (
                    <>
                    <UserPicture src='https://images.unsplash.com/photo-1615242586099-ad758c8a24cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80' />
                    <MenuRight>Carteira</MenuRight>
                    <MenuRight href='/'>Logout</MenuRight>
                    <FiArrowRight />
                    </>
                ) : (
                    <>
                        <MenuRight href='/'>Home</MenuRight>
                        <MenuRight href='/login'>Cadastrar</MenuRight>
                    </>
                )}
            </Row>
        </Container>
    </Wrapper>
  )
}

export { Header }