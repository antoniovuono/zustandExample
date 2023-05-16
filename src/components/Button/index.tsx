import React from 'react';

import {Container, Title} from './styles';
import {TouchableOpacityProps} from 'react-native/types';

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

export const Button = ({title, ...rest}: IButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
