/* eslint-disable @typescript-eslint/no-explicit-any */
import { actions } from './actions';

export const filterReducer = (state: any, action: any) => {
  // const { filters } = state;
  const { payload: newValue } = action;

  switch (action.type) {
    case actions.UPDATE_INDUSTRY: {
      return {
        ...state,
        industry: newValue,
      };
    }
    case actions.UPDATE_SALARY_FROM: {
      return {
        ...state,
        salaryFrom: newValue,
      };
    }
    case actions.UPDATE_SALARY_TO: {
      return {
        ...state,
        salaryTo: newValue,
      };
    }
    case actions.UPDATE_SEARCH_WORD: {
      return {
        ...state,
        searchWord: newValue,
      };
    }
    case actions.CLEAR_FILTERS: {
      return {
        ...state,
        ...newValue,
      };
    }

    default:
      return state;
  }
};
