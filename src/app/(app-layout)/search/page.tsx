import { PageTitle } from '@/components/common/page-title';
import { Section, SectionTitle } from '@/components/common/section';
import { ProductFilter } from '@/components/search/product-filter';
import { ProductFilterDrawer } from '@/components/search/product-filter-drawer';
import { SearchResults } from '@/components/search/search-results';
import { SelectedFilters } from '@/components/search/selected-filters';

export default function SearchPage() {
  return (
    <main>
      <PageTitle title="Search Products" srOnly />
      <div className="grid gap-2 md:grid-cols-[theme(spacing.72)_1fr]">
        <Section className="sticky top-24 hidden max-h-[80vh] overflow-auto px-2 md:block">
          <SectionTitle as="h2" srOnly>
            Filter
          </SectionTitle>
          <ProductFilter />
        </Section>
        <Section>
          <SectionTitle as="h2" srOnly>
            Search Results
          </SectionTitle>
          <div className="flex flex-col gap-2">
            <SelectedFilters />
            <ProductFilterDrawer />
            <SearchResults />
          </div>
        </Section>
      </div>
    </main>
    
  );
}
