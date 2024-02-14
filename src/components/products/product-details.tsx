import { AddProductToCartButton } from '@/components/cart/add-to-cart-button';
import { Chip, ChipContent } from '@/components/common/chip';
import { Price } from '@/components/common/price';
import { NextLink } from '@/components/routing/next-link';
import { routes } from '@/components/routing/routing-utils';
import Image from 'next/image';
import type { Product } from './product-types';

type ProductDetailsProps = {
  product: Product;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="relative mx-auto aspect-square w-full max-w-sm md:max-w-lg">
        <Image
          className="object-contain"
          src={product.image}
          alt={product.title}
          priority
          fill
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-2 text-center">
          <div className="text-2xl font-bold">{product.title}</div>
          <div className="text-3xl">
            <Price className="text-black" value={product.price} />
          </div>
        </div>
        <AddProductToCartButton product={product} />
        <p className="text-sm">{product.description}</p>
        <NextLink
          href={routes.search({
            query: { categories: [product.category.value] },
          })}
        >
          <Chip>
            <ChipContent>{product.category.title}</ChipContent>
          </Chip>
        </NextLink>
      </div>
    </div>
  );
}
