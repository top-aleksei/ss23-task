/* eslint-disable @typescript-eslint/no-explicit-any */
import { getAccessTokenLS } from '../localStorage/localStorage';
import { SECRET_KEY, authParams, endpoints } from './config';
import { IToken, IVacancy } from './models';
import { ICatalog, IFetchedVacancies } from './models';

// export const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';
// const APP_API_KEY =
//   'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';

// export const ENDPOINT_CATALOG = 'https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/';

// export const ENDPOINT_VACANIES = 'https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/';

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
  } catch (e) {
    console.log(e);
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
