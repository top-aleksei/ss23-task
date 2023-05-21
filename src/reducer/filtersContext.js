import { appReducer } from './reducer';

import { createContext, useReducer, useContext } from 'react';

const TodoContext = createContext();

const initialState = {
  filtersState: {
    salaryFrom: '',
    salaryTo: '',
    industry: '',
    searchWord: '',
    page: 1,
  },
  vacanciesState: {
    objects: [],
    total: 0,
  },
  favoriteState: [],
  isFetching: true,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

export const useAppContext = () => useContext(TodoContext);
