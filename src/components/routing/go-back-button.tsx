'use client';

import { Button } from '@/components/common/button';
import { ArrowLeftIcon } from '@/components/common/icons';
import { useRouter } from 'next/navigation';

export function GoBackButton() {
  const router = useRouter();

  return (
    <Button
      aria-label="Go Back"
      circle
      variant="transparent"
      icon={<ArrowLeftIcon />}
      onClick={() => {
        router.back();
      }}
    />
  );
}
