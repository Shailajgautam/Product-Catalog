import { TooltipProvider } from '@/components/common/tooltip';
import { BaseSWRConfig } from '@/components/http-client/base-swr-config';
import { Layout,} from '@/components/layout/layout';
import '@/components/styles/global.css';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import { twJoin } from 'tailwind-merge';

const inter = Inter({
  variable: '--font-inter',
  display: 'swap',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#fff',
};

type RootLayoutProps = React.PropsWithChildren;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={twJoin(
        inter.variable,
        'font-sans',
        'text-[clamp(0.875rem,0.667rem+0.52vw,1rem)]',
      )}
    >
      <head />
      <body className="bg-background-dark text-text-main">
        <BaseSWRConfig>
          <TooltipProvider>
            <Layout>
              {children}
            </Layout>
          </TooltipProvider>
        </BaseSWRConfig>
      </body>
    </html>
  );
}
