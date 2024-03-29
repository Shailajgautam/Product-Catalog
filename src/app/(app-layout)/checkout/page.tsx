import { getCart } from '@/components/cart/cart-fetchers';
import { CartItemList } from '@/components/cart/cart-item-list';
import { CartTotalPrice } from '@/components/cart/cart-total-price';
import { ClearCartButton } from '@/components/cart/clear-cart-button';
import { CheckoutForm } from '@/components/checkout/checkout-form';
import { Container } from '@/components/common/container';
import { PageTitle } from '@/components/common/page-title';
import { Paper } from '@/components/common/paper';
import { Section, SectionTitle } from '@/components/common/section';

export default async function CheckoutPage() {
  const cart = await getCart();

  return (
    <main>
      <PageTitle title="Checkout" />
      <Container maxWidth="sm" className="flex flex-col gap-4 p-4">
        <Section>
          <SectionTitle as="h2" actions={<ClearCartButton cart={cart} />}>
            Cart
          </SectionTitle>
          <Paper className="p-0 md:p-0 rounded">
            <CartItemList />
            <CartTotalPrice className="p-6" />
          </Paper>
        </Section>
        {cart ? (
          <Section>
            <SectionTitle as="h2">Credit/Debit Card Information</SectionTitle>
            <Paper>
              <CheckoutForm />
            </Paper>
          </Section>
        ) : null}
      </Container>
    </main>
  );
}
