'use client';

import { Paper } from '@/components/common/paper';
import { ProductGrid, ProductGridSkeleton } from '@/components/products/product-grid';
import { useFilterProducts } from '@/components/search/search-hooks';

export function SearchResults() {
  const { data, isValidating } = useFilterProducts();

  return (
    <Paper>
      {isValidating ? (
        <ProductGridSkeleton itemCount={8} />
      ) : (
        <ProductGrid products={data?.products ?? []} />
      )}
    </Paper>
  );
}
