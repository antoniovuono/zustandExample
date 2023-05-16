import {create} from 'zustand';

interface UserType {
  name: string;
  email: string;
}

export interface State {
  users: UserType[];
  addUser: (user: UserType) => void;
}

const useUserStore = create<State>(set => ({
  users: [],

  addUser: (user: UserType) => {
    set(state => ({
      users: [...state.users, user],
    }));
  },
}));

export default useUserStore;
