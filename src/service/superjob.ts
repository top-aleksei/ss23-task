/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccessTokenLS } from '../localStorage/localStorage';
import { SECRET_KEY, authParams, endpoints } from './config';
import { IToken, IVacancy } from './models';
import { ICatalog, IFetchedVacancies } from './models';

export async function fetchCatalog() {
  try {
    const response = await fetch(`${endpoints.ENDPOINT_CATALOG}`, {
      headers: {
        'x-secret-key': SECRET_KEY,
        'X-Api-App-Id': authParams.client_secret,
      },
    });
    const catlogueObj: ICatalog[] = await response.json();
    return catlogueObj;
  } catch {
    throw new Error('catalog errror');
  }
}

export async function fetchVacancies(
  {
    salaryFrom = '',
    salaryTo = '',
    industry = '',
    searchWord = '',
  }: { [key: string]: number | string },
  page = 1
) {
  try {
    const response = await fetch(
      `${
        endpoints.ENDPOINT_VACANIES
      }?published=1&payment_from=${salaryFrom}&payment_to=${salaryTo}&catalogues=${industry}&keyword=${searchWord}&page=${
        page - 1
      }&count=4`,
      {
        headers: {
          'x-secret-key': SECRET_KEY,
          'X-Api-App-Id': authParams.client_secret,
          Authorization: `Bearer ${getAccessTokenLS().access_token}`,
        },
      }
    );
    const vacancies: IFetchedVacancies = await response.json();
    return vacancies;
  } catch {
    throw new Error('getting vacancies error');
  }
}

export async function fetchExactVacancy(id: string) {
  try {
    const response = await fetch(`${endpoints.ENDPOINT_VACANIES}${id}`, {
      headers: {
        'x-secret-key': SECRET_KEY,
        'X-Api-App-Id': authParams.client_secret,
        Authorization: `Bearer ${getAccessTokenLS().access_token}`,
      },
    });
    const vacancy: IVacancy = await response.json();
    return vacancy;
  } catch {
    throw new Error('getting vacancy error');
  }
}

export async function fetchToken() {
  try {
    const response = await fetch(
      `${endpoints.ENDPOINT_AUTH}?login=${authParams.login}&password=${authParams.password}&client_id=${authParams.client_id}&client_secret=${authParams.client_secret}
    &hr=0`,
      {
        headers: {
          'x-secret-key': SECRET_KEY,
          'X-Api-App-Id': authParams.client_secret,
        },
      }
    );
    const tokenObj: IToken = await response.json();
    return tokenObj;
  } catch {
    throw new Error('getting token errror');
  }
}
