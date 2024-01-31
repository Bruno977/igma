import { Home } from '../../pages/Home';
import { Footer } from '../Footer';
import { Header } from '../Header';

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}
