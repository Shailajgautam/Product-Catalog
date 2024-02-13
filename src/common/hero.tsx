import {
  APP_TITLE,
} from '@/common/common-utils';
import { routes } from '@/routing/routing-utils';
import { ButtonLink } from './button-link';


export function Hero() {
  return (
    <div className="flex justify-between p-4 items-center shadow-2xl">
    <h1 className="text-2xl font-bold text-primary-main sm:text-3xl lg:text-4xl mb-3">
      {APP_TITLE}
    </h1>
    <div className="mx=auto">
      <ButtonLink href={routes.search()}>Explore Shop</ButtonLink>
    </div>    
  </div>
  

  );
}
