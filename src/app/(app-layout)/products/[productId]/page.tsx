import { PageTitle } from '@/common/page-title';
import { Paper } from '@/common/paper';
import { Section, SectionTitle } from '@/common/section';
import { ProductDetails } from '@/products/product-details';
import { getOneProductById } from '@/products/product-fetchers';
import { ProductGridSkeleton } from '@/products/product-grid';
import { RelatedProducts } from '@/products/related-products';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export type ProductPageProps = {
  params: {
    productId: string;
  };
};


export default async function ProductPage({ params }: ProductPageProps) {
  const productId = Number(params.productId);
  const product = await getOneProductById(productId);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <main>
        <PageTitle title={product.title} />
        <Paper>
          <ProductDetails product={product} />
        </Paper>
      </main>
      <Section as="aside">
        <SectionTitle as="h2">Related Products</SectionTitle>
        <Paper>
          <Suspense fallback={<ProductGridSkeleton itemCount={6} />}>
            <RelatedProducts productId={productId} />
          </Suspense>
        </Paper>
      </Section>
    </div>
  );
}
