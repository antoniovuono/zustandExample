import React, {useState} from 'react';

import {Container, FormContent, UserGroupContent} from './styles';
import {Button} from '../../components/Button';
import {TextInput} from '../../components/TextInput';
import {User} from '../../components/User';
import useUserStore from '../../stores/users';

export const Home = () => {
  const users = useUserStore(state => state.users);
  const addUser = useUserStore(state => state.addUser);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddUser = () => {
    addUser({
      name,
      email,
    });

    setName('');
    setEmail('');
  };

  return (
    <Container>
      <UserGroupContent>
        {users?.map(user => (
          <User key={Math.random()} name={user.name} email={user.email} />
        ))}
      </UserGroupContent>

      <FormContent>
        <TextInput placeholder="Nome" value={name} onChangeText={setName} />
        <TextInput placeholder="E-mail" value={email} onChangeText={setEmail} />

        <Button title="Cadastrar" onPress={handleAddUser} />
      </FormContent>
    </Container>
  );
};
