import { filterReducer } from './reducer';

import { createContext, useReducer, useContext } from 'react';

// создаем контекст
const TodoContext = createContext();

// начальное состояние
const initialState = {
  salaryFrom: '',
  salaryTo: '',
  industry: '',
  searchWord: '',
};

// провайдер
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>{children}</TodoContext.Provider>;
};

// утилита для извлечения значений из контекста
export const useAppContext = () => useContext(TodoContext);
