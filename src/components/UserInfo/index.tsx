import React from 'react';
import { Container, NameText, UserPicture } from './styles';
import { IUserInfo } from './types';


const UserInfo = ({name, image}: IUserInfo) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{name}</NameText>
      </div>
    </Container>
  )
}

export { UserInfo }