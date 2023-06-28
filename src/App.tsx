import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Container from './layout/Container';

export default function App() {
  return (
    <div className="bg-[url('./assets/hero.jpg')] bg-cover bg-center text-slate-100">
      <Container>
        <Header />
        <Hero />
        <Footer />
      </Container>
    </div>
  );
}
