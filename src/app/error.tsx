
'use client';

import { Button } from '@/components/common/button';
import { ErrorPage } from '@/components/error-handling/error-page';
import { StatusCodes } from 'http-status-codes';

type RootErrorPageProps = {
  error: Error;
  reset: VoidFunction;
};

export default function RootErrorPage({ error, reset }: RootErrorPageProps) {
  return (
    <ErrorPage
      statusCode={StatusCodes.INTERNAL_SERVER_ERROR}
      message={error.message}
    >
      <Button
        className="mx-auto w-fit"
        onClick={() => {
          reset();
        }}
      >
        Try Again
      </Button>
    </ErrorPage>
  );
}
