'use client';

import type { ButtonProps } from '@/components/common/button';
import { Button } from '@/components/common/button';
import type { Omit } from '@/components/common/common-types';
import { useFormStatus } from 'react-dom';

type SubmitButtonProps = Omit<ButtonProps, 'type' | 'isLoading'>;

export function SubmitButton(props: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return <Button type="submit" isLoading={pending} {...props} />;
}
