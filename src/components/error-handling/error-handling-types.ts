import type { HttpClientError } from '@/components/http-client/http-client-error';

export type ApiRequestError = HttpClientError;

export type ApiErrorResponse = {
  statusCode: number;
  message: string;
};
