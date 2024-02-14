import { PageTitle } from '@/components/common/page-title';
import { Paper } from '@/components/common/paper';
import { Section, SectionTitle } from '@/components/common/section';
import { ProductDetails } from '@/components/products/product-details';
import { getOneProductById } from '@/components/products/product-fetchers';
import { ProductGridSkeleton } from '@/components/products/product-grid';
import { RelatedProducts } from '@/components/products/related-products';
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
