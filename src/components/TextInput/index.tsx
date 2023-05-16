import React from 'react';

import {Container} from './styles';
import {TextInputProps} from 'react-native/types';

export const TextInput = ({...rest}: TextInputProps) => {
  return <Container {...rest} />;
};
