import useSWR from 'swr';

import { IMember } from '../mssql/member';
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

export function useHeadMembers() {
  const { data, error } = useSWR(`/api/getHeadMembers`, fetcher);
  return {
    entries: data as Array<IMember>,
    isLoading: !error && !data,
    isError: error,
  };
}
