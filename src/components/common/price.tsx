import { twMerge } from 'tailwind-merge';
import type { Maybe } from './common-types';

type PriceProps = {
  className?: string;
  value: Maybe<number>;
};

const priceFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

export function Price({ className, value }: PriceProps) {
  return (
    <span className={twMerge(' font-semibold', className)}>
      {priceFormatter.format(value ?? 0)}
    </span>
  );
}
