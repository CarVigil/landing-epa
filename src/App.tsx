import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Activities } from "./components/Activities";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <Hero />
      <About />
      <Activities />
      <Team />
      <Contact />
    </div>
  );
}
