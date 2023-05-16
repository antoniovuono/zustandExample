import React from 'react';

import {Container, FormContent, UserGroupContent} from './styles';
import {Button} from '../../components/Button';
import {TextInput} from '../../components/TextInput';
import {User} from '../../components/User';

export const Home = () => {
  return (
    <Container>
      <UserGroupContent>
        <User name="Antonio" email="antonio@brq.com" />
        <User name="Antonio" email="antonio@brq.com" />
        <User name="Antonio" email="antonio@brq.com" />
      </UserGroupContent>

      <FormContent>
        <TextInput placeholder="Nome" />
        <TextInput placeholder="E-mail" />

        <Button title="Cadastrar" />
      </FormContent>
    </Container>
  );
};
