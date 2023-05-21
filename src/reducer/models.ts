/* eslint-disable @typescript-eslint/no-explicit-any */
import { IFetchedVacancies, IVacancy } from '../service/models';

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
}

export interface IAction {
  type: string;
  payload: any;
}
