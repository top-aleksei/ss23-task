import { INITIAL_FILTERS } from '../constants';

/* eslint-disable @typescript-eslint/no-explicit-any */
export enum actions {
  UPDATE_SALARY_TO = 'UPDATE_SALARY_TO',
  UPDATE_SALARY_FROM = 'UPDATE_SALARY_FROM',
  UPDATE_INDUSTRY = 'UPDATE_INDUSTRY',
  UPDATE_SEARCH_WORD = 'UPDATE_SEARCH_WORD',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
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
