import {APP_TITLE } from '@/components/common/common-utils';
import { Container } from '@/components/common/container';
import { NextLink } from '@/components/routing/next-link';
import { twMerge } from 'tailwind-merge';
import { BackToTopButton } from './back-to-top-button';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="grid min-h-screen grid-rows-[1fr_auto]">{children}</div>
      <BackToTopButton />
    </>
  );
}

type LayoutHeaderProps = React.PropsWithChildren;

export function LayoutHeader({ children }: LayoutHeaderProps) {
  return (
    <header className="fixed z-10 h-app-header w-full bg-background-main shadow-lg ">
      <Container
        maxWidth="2xl"
        className="flex h-full items-center justify-between p-4"
      >
        <NextLink href="/" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-main ">
          {APP_TITLE}
        </NextLink>
        {children}
      </Container>
    </header>
  );
}

type LayoutContentProps = React.PropsWithChildren<{
  className?: string;
}>;

export function LayoutContent({ className, children }: LayoutContentProps) {
  return (
    <Container
      maxWidth="2xl"
      className={twMerge('mt-app-header py-2 md:p-4', className)}
    >
      {children}
    </Container>
  );
}


