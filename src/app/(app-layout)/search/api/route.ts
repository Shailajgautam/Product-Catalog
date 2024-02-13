import { createHandler } from '@/api/api-utils';
import { filterProducts } from '@/search/search-fetchers';
import type { ProductFilterArgs } from '@/search/search-types';
import { ProductFilterKey } from '@/search/search-utils';
import { NextResponse } from 'next/server';

export const GET = createHandler(async (request) => {
  const { searchParams } = request.nextUrl;

  const productFilterArgs: ProductFilterArgs = {
    sorting: searchParams.get(ProductFilterKey.SORTING) ?? undefined,
    categories: searchParams.getAll(ProductFilterKey.CATEGORIES),
    priceRanges: searchParams.getAll(ProductFilterKey.PRICE_RANGES),
  };

  const response = await filterProducts(productFilterArgs);
  return NextResponse.json(response);
});
