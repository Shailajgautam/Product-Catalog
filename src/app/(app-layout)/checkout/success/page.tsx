import { getCart } from '@/components/cart/cart-fetchers';
import { CheckoutSuccessMessage } from '@/components/checkout/checkout-success-message';
import { Container } from '@/components/common/container';
import { PageTitle } from '@/components/common/page-title';
import { Paper } from '@/components/common/paper';
import { Section, SectionTitle } from '@/components/common/section';
import { redirect } from 'next/navigation';

export default async function CheckoutSuccessPage() {
  const cart = await getCart();

  if (cart) {
    redirect('/');
  }

  return (
    <main>
      <PageTitle title="Success" />
      <Container maxWidth="sm" className="flex flex-col gap-4">
        <Section>
          <SectionTitle as="h2">Checkout Success</SectionTitle>
          <Paper>
            <CheckoutSuccessMessage />
          </Paper>
        </Section>
      </Container>
    </main>
  );
}
