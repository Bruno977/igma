import { useEffect, useState } from 'react';
import { Home } from '../../pages/Home';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from './style';

export function Layout() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <>
      <Header animate={animate} />
      <Main $animate={animate}>
        <Home />
      </Main>
      <Footer />
    </>
  );
}
