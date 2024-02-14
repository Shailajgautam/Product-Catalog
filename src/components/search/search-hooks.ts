import type { HttpClientError } from '@/components/http-client/http-client-error';
import type { ProductFilterResponse } from '@/components/search/search-types';
import { useSearchParams } from 'next/navigation';
import type { SWRConfiguration } from 'swr';
import useSWR from 'swr';

export function useFilterProducts(config?: SWRConfiguration) {
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  return useSWR<ProductFilterResponse, HttpClientError>(
    `/search/api${queryString ? `?${queryString}` : ''}`,
    { ...config, keepPreviousData: true },
  );
}
