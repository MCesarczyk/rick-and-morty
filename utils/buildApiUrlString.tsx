export const buildApiUrlString = (
  initialApiUrl: string,
  page: string | string[] | undefined,
  query: string | string[] | undefined
) => {
  const baseUrl = initialApiUrl;

  const pageString = page === undefined ? '' : `?page=${page}`;

  const queryString = query !== undefined && query.length > 0 ? (`${page === undefined ? '?' : '&'}name=${query}`) : '';

  const resultString = baseUrl + pageString + queryString;

  return resultString;
};