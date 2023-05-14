/* eslint-disable @typescript-eslint/no-explicit-any */
import { ICatalog } from './models';

export const SECRET_KEY = 'GEU4nvd3rej*jeh.eqp';

export const ENDPOINT_CATALOG = 'https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/';

export const ENDPOINT_VACANIES = 'https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/';

export async function fetchCatalog() {
  try {
    const response = await fetch(`${ENDPOINT_CATALOG}`, {
      headers: {
        'x-secret-key': `${SECRET_KEY}`,
      },
    });
    const catlogueObj: ICatalog[] = await response.json();
    // return catlogueObj.map((el) => el.title_rus);
    return catlogueObj;
  } catch {
    throw new Error('catalog errror');
  }
}

export async function fetchVacancies(
  salaryFrom: any,
  salaryTo: any,
  industry: any,
  searhWord: any
) {
  try {
    const response = await fetch(
      `${ENDPOINT_VACANIES}?published=1&payment_from=${salaryFrom}&payment_to=${salaryTo}&catalogues=${industry}&keyword=${searhWord}&page=0&count=2`,
      {
        headers: {
          'x-secret-key': `${SECRET_KEY}`,
        },
      }
    );
  } catch {
    throw new Error('getting vacanciies error');
  }
}
