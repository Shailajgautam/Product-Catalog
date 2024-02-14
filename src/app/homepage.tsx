import { Categories } from '@/components/categories/categories';
import { Container } from '@/components/common/container';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';

export default function Homepage() {
  return (
      <main>
      <Header />
      <Container maxWidth="xl" className="p-8">
        <Categories />
      </Container>
      <Footer />
    </main>
  )
}
