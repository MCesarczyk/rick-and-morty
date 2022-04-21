export const fetchAPIData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    new Error(response.statusText);
  }

  const data = await response.json();

  return data;
};