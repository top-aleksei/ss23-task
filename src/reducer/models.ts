/* eslint-disable @typescript-eslint/no-explicit-any */
import { IVacancy } from '../service/models';

export interface IState {
  filtersState: {
    salaryFrom: number | '';
    salaryTo: number | '';
    industry: number | '';
    searchWord: string;
    page: number;
  };
  vacanciesState: {
    objects: IVacancy[] | null;
    total: number;
  };
  favoriteState: IVacancy[];
  isFetching: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}
