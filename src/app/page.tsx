import { Categories } from '@/categories/categories';
import { Container } from '@/common/container';
import { Hero } from '@/common/hero';
import { Footer } from '@/common/footer';

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <Container maxWidth="xl" className="p-8">
        <Categories />
      </Container>
      <Footer />
    </main>
  );
}
