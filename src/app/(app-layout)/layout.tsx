import { CartDrawer } from '@/components/cart/cart-drawer';
import { LayoutContent, LayoutHeader } from '@/components/layout/layout';
import { Footer } from '@/components/common/footer';

type AppLayoutProps = React.PropsWithChildren;

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <LayoutHeader>
        <CartDrawer />
      </LayoutHeader>
      <LayoutContent>{children}</LayoutContent>
      <Footer />
    </>
  );
}
