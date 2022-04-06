import Navbar from "./components/navbar/navbar";
import { useState } from "react";
import Home from "./components/home/home";
import About from "./components/about/about";
import Wallet from "./components/wallets/wallets";
import QuickStart from "./components/quick-start/quickStart";
import Stat from "./components/stats/stats";
import Footer from "./components/footer/footer";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <About />
      <Wallet />
      <QuickStart />
      <Stat />
      <Footer />
    </div>
  );
}

export default App;
