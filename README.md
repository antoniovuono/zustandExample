# zustendExample

## Sobre:
O Zustend é uma biblioteca que nos permite trabalhar com o gerenciamento de estados globais de uma forma bem simplificada.

https://zustand-demo.pmnd.rs/

## Requisitos básicos:
 - Ambiente React-native configurado na sua máquina.
 - Emulador Android ou IOS.
 - yarn instalado

## Rodando o projeto:

Após clonar o projeto na sua máquina você precisa rodar os seguintes comandos.

## Instalando as dependências:

```
yarn
```

## Caso você esteja usando Macbook:

```
cd ios && pod install & cd ..
```

## Rodando o projeto

Você deve rodar o bundle com o comando

```
yarn start
```

## Rodar no emulador IOS:

```
yarn ios
```
## Rodar com o emulador Android:

```
yarn android
```

## Como criar um estado global com Zustand:

```
import {create} from 'zustand';

// Criamos com o método create definimos um set
const useUserStore = create<State>(set => ({
  // Configuramos que o estado começa com um valor de um array vazio.
  users: [],
  
  // Adicionando um método para o estado
  addUser: (user: UserType) => {

    // Usamos o set state para adicionar dentro do array de users tudo que já tem dentro dele usando o spread ... e mais o usuário novo criado.
    set(state => ({
      users: [...state.users, user],
    }));
  },

  // Precisamos exportar o estado para que ele possa ser utilizado nos demais lugares...
  export default useUserStore;

}));
```

## Consumindo o estado dentro dos componentes:

```
  // Chamando o estado global no componente:
  const users = useUserStore(state => state.users);
  const addUser = useUserStore(state => state.addUser);

  // Consumindo o array de users:

  {users?.map(user => (
          <User key={Math.random()} name={user.name} email={user.email} />
        ))}

  // Consumindo método addUser criado

  addUser({
      name,
      email,
    });
```



