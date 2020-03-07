import { query, queryEncoded } from './query';

export async function request (requestCfg) {
  try {
    const { url, method, data, params, headers, isEncodedParams } = requestCfg;
    const requestUrl = !params ? url : `${url}?${isEncodedParams ? queryEncoded(params) : query(params)}`;
    const basicHeaders = {
      "Accept": "application/json",
      "Content-Type": "application/json"
    };
    const response = await fetch(requestUrl.trim(), Object.assign({ method, headers: { ...basicHeaders, headers } }, data ? { body: JSON.stringify(data) } : {}));
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}