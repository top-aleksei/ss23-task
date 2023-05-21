import { getAccessTokenLS, setAccessTokenLS } from '../localStorage/localStorage';
import { fetchToken } from '../service/superjob';

export async function checkToken() {
  const lsToken = getAccessTokenLS();

  if ((lsToken && lsToken.ttl < Date.now() / 1000) || !lsToken) {
    const data = await fetchToken();
    setAccessTokenLS(data);
  }
}
