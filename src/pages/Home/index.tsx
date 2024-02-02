import { Clients } from '../../components/Clients';
import { Hero } from '../../components/Hero';
import { Newsletter } from '../../components/Newsletter';

export function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Newsletter />
    </>
  );
}
