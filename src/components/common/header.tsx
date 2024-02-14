import {
  APP_TITLE,
} from '@/components/common/common-utils';
import { routes } from '@/components/routing/routing-utils';
import { ButtonLink } from './button-link';


export function Header() {
  return (
    <div className="flex justify-between p-3 items-center shadow-2xl">
    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-main ">
      {APP_TITLE}
    </h1>
    <div className="mx=auto">
      <ButtonLink href={routes.search()}>Explore Shop</ButtonLink>
    </div>    
  </div>
  

  );
}
