export function query (queryObj) {
  return Object.entries(queryObj).map(item => `${item[0]}=${item[1]}`).join('&');
}

export function queryEncoded (queryObj) {
  return Object.entries(queryObj).map(item => `${item[0]}=${encodeURIComponent(item[1])}`).join('&');
}