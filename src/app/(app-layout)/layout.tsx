import { CartDrawer } from '@/cart/cart-drawer';
import { LayoutContent, LayoutHeader } from '@/layout/layout';
import { Footer } from '@/common/footer';

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
