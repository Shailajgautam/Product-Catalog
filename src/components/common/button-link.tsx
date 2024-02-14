import type { NextLinkProps } from '@/components/routing/next-link';
import { NextLink } from '@/components/routing/next-link';
import type { UseButtonBasePropsArgs } from './button-base-hooks';
import { useButtonBaseProps } from './button-base-hooks';
import type { Omit } from './common-types';

type ButtonLinkProps = NextLinkProps &
  Omit<UseButtonBasePropsArgs, 'isDisabled' | 'isLoading'>;

export function ButtonLink({
  className,
  icon,
  iconAlignment,
  circle,
  variant,
  children,
  ...rest
}: ButtonLinkProps) {
  const buttonBaseProps = useButtonBaseProps({
    className,
    variant,
    circle,
    icon,
    iconAlignment,
    children,
  });

  return <NextLink {...rest} {...buttonBaseProps} />;
}
