import { appReducer } from './reducer';

import { createContext, useReducer, useContext } from 'react';

// создаем контекст
const TodoContext = createContext();

// начальное состояние
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

// провайдер
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

// утилита для извлечения значений из контекста
export const useAppContext = () => useContext(TodoContext);
