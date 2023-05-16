import React from 'react';

import {Container, Title, Email} from './styles';

export interface IUser {
  name: string;
  email: string;
}

export const User = ({name, email}: IUser) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Email>{email}</Email>
    </Container>
  );
};
