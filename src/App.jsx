import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Highlights from './components/Highlights';
import Resources from './components/Resources';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Highlights />
        <Resources />
      </main>
    </div>
  );
}

export default App;
