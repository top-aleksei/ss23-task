import { IToken, IVacancy } from '../service/models';

export function getFavoriteVacanciesLS() {
  const items = localStorage.getItem('favoriteVacancies');
  if (items) {
    return JSON.parse(items);
  }
}

export function setFavoriteVacanciesLS(vacancies: IVacancy[]) {
  localStorage.setItem('favoriteVacancies', JSON.stringify(vacancies));
}

export function getAccessTokenLS() {
  const token = localStorage.getItem('jobAccessToken');
  return token ? JSON.parse(token) : null;
}

export function setAccessTokenLS(token: IToken) {
  return localStorage.setItem('jobAccessToken', JSON.stringify(token));
}
