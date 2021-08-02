import useSWR from 'swr';

import { ITitle } from '../mssql/title';

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json());
}

export function useTitles() {
  const { data, error } = useSWR(`/api/getTitles`, fetcher);
  return {
    entries: data as Array<ITitle>,
    isLoading: !error && !data,
    isError: error,
  };
}
