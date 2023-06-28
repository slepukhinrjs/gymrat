import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Container from './layout/Container';

export default function App() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Footer />
      </Container>
    </>
  );
}
