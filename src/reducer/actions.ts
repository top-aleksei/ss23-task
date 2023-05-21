import { INITIAL_FILTERS } from '../constants';
import { IFetchedVacancies, IVacancy } from '../service/models';

/* eslint-disable @typescript-eslint/no-explicit-any */
export enum actions {
  UPDATE_SALARY_TO = 'UPDATE_SALARY_TO',
  UPDATE_SALARY_FROM = 'UPDATE_SALARY_FROM',
  UPDATE_INDUSTRY = 'UPDATE_INDUSTRY',
  UPDATE_SEARCH_WORD = 'UPDATE_SEARCH_WORD',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
  UPDATE_VACANCIES = 'UPDATE_VACANCIES',
  UPDATE_PAGE_NUMBER = 'UPDATE_PAGE_NUMBER',
  ADD_FAVORITE_VACANCY = 'ADD_FAVORITE_VACANCY',
  REMOVE_FAVORITE_VACANCY = 'REMOVE_FAVORITE_VACANCY',
  SET_FETCH_ACTIVITY = 'SET_FETCH_ACTIVITY',
}

const createAction = (type: string, payload: any) => ({ type, payload });

export const updateSalaryTo = (newValue: number) =>
  createAction(actions.UPDATE_SALARY_TO, newValue);

export const updateSalaryFrom = (newValue: number) =>
  createAction(actions.UPDATE_SALARY_FROM, newValue);

export const updateIndustry = (newValue: string) => createAction(actions.UPDATE_INDUSTRY, newValue);

export const updateSearchWord = (newValue: string) =>
  createAction(actions.UPDATE_SEARCH_WORD, newValue);

export const clearFilters = () => createAction(actions.CLEAR_FILTERS, INITIAL_FILTERS);

export const updateVacancies = (newValue: IFetchedVacancies) =>
  createAction(actions.UPDATE_VACANCIES, newValue);

export const setPage = (newValue: number) => createAction(actions.UPDATE_PAGE_NUMBER, newValue);

export const addToFavorite = (newValue: IVacancy[]) =>
  createAction(actions.ADD_FAVORITE_VACANCY, newValue);

export const removeFromFavorite = (newValue: number) =>
  createAction(actions.REMOVE_FAVORITE_VACANCY, newValue);

export const setFetchActivity = (newValue: boolean) =>
  createAction(actions.SET_FETCH_ACTIVITY, newValue);
