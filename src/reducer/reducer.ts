/* eslint-disable @typescript-eslint/no-explicit-any */
import { actions } from './actions';
import { IAction, IState } from './models';

export const appReducer = (state: IState, action: IAction) => {
  const { filtersState, vacanciesState, favoriteState } = state;
  const { payload: newValue } = action;

  switch (action.type) {
    case actions.UPDATE_INDUSTRY: {
      return {
        ...state,
        filtersState: {
          ...filtersState,
          industry: newValue,
        },
      };
    }
    case actions.UPDATE_SALARY_FROM: {
      return {
        ...state,
        filtersState: {
          ...filtersState,
          salaryFrom: newValue,
        },
      };
    }
    case actions.UPDATE_SALARY_TO: {
      return {
        ...state,
        filtersState: {
          ...filtersState,
          salaryTo: newValue,
        },
      };
    }
    case actions.UPDATE_SEARCH_WORD: {
      return {
        ...state,
        filtersState: {
          ...filtersState,
          searchWord: newValue,
        },
      };
    }
    case actions.CLEAR_FILTERS: {
      return {
        ...state,
        filtersState: {
          ...filtersState,
          ...newValue,
        },
      };
    }
    case actions.UPDATE_VACANCIES: {
      return {
        ...state,
        vacanciesState: { ...newValue },
      };
    }
    case actions.UPDATE_PAGE_NUMBER: {
      return {
        ...state,
        filtersState: {
          ...filtersState,
          page: newValue,
        },
      };
    }
    case actions.ADD_FAVORITE_VACANCY: {
      // debugger;
      return {
        ...state,
        favoriteState: [...favoriteState, ...newValue],
      };
    }
    case actions.REMOVE_FAVORITE_VACANCY: {
      return {
        ...state,
        favoriteState: favoriteState.filter((el) => el.id !== newValue),
      };
    }

    case actions.SET_FETCH_ACTIVITY: {
      return {
        ...state,
        isFetching: newValue,
      };
    }

    default:
      return state;
  }
};
