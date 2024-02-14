import { Price } from '@/components/common/price';
import { Tooltip } from '@/components/common/tooltip';
import { NextLink } from '@/components/routing/next-link';
import { routes } from '@/components/routing/routing-utils';
import Image from 'next/image';
import type { Product } from './product-types';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <NextLink
      href={routes.product({ params: { productId: product.id } })}
      
      className="block"
    >
      <article className="group flex flex-col gap-2 rounded-md border-2 p-2 md:p-4">
        <div className="p-2">
          <div className="relative aspect-[12/10] transform bg-transparent transition duration-500 ease-out group-hover:scale-110">
            <Image
              className="object-contain"
              src={product.image}
              alt={product.title}
              fill
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <Tooltip content={<div>{product.title}</div>}>
            <h3 className="text-sm font-bold fixed-leading-5 fixed-line-clamp-3 text-black">
              {product.title}
            </h3>
          </Tooltip>
          <div>
            <Price className="text-black" value={product.price} />
          </div>
        </div>
      </article>
    </NextLink>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex animate-pulse flex-col gap-2 rounded-md border-2 p-2 md:p-4">
      <div className="p-2">
        <div className="aspect-[12/10] rounded-md bg-skeleton" />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="flex w-full flex-col items-center gap-1">
          <div className="h-4 w-full max-w-[theme(spacing.28)] rounded-md bg-skeleton" />
          <div className="h-4 w-full max-w-[theme(spacing.36)] rounded-md bg-skeleton" />
          <div className="h-4 w-full max-w-[theme(spacing.28)] rounded-md bg-skeleton" />
        </div>
        <div className="h-6 w-16 rounded-md bg-skeleton" />
      </div>
    </div>
  );
}
