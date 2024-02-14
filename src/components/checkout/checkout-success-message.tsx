import { ButtonLink } from '@/components/common/button-link';
import { CheckOutlinedIcon } from '@/components/common/icons';
import { routes } from '@/components/routing/routing-utils';

export function CheckoutSuccessMessage() {
  return (
    <div className="grid place-items-center gap-4 text-success-main">
      <CheckOutlinedIcon size={80} />
      <div className="text-center text-2xl font-semibold">
        Your order has been received
      </div>
      <ButtonLink href={routes.search()}>Back to Store</ButtonLink>
    </div>
  );
}
