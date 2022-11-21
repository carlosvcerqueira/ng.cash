import React from 'react';
import { FiDollarSign, FiArrowUpRight } from 'react-icons/fi';
import { CardContainer, Content, HasInfo, PostInfo, UserInfo, UserPicture } from './styles';



const Card = () => {
  return (
    <CardContainer>
        <Content>
            <UserInfo>
                <UserPicture src='https://images.unsplash.com/photo-1615242586099-ad758c8a24cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'/>
                <div>
                    <h4>Nome Usuário</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
              <h4>Transferência Realizada</h4>
              <p>
                Transferência no valor de R$13,00
              </p>
            </PostInfo>
            <HasInfo>
                <p>
                    <FiDollarSign/> 13,00 <FiArrowUpRight/>
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }