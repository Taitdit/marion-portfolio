import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";


import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Mentions from "./pages/Mentions"
import Politique from "./pages/Politique"
import Header from "./components/Header";
import Footer from './components/Footer';
import { DarkModeProvider } from "./contexts/DarkModeContext";
import {MenuHeaderProvider } from "./contexts/MenuHeaderContext";
import ScrollToTop from "./components/ScrollToTop";
import Projet from "./pages/Projet";
import { useLocation } from "react-router-dom";
  

const MainLayout = () => {
  const location = useLocation();

  return (
    <MenuHeaderProvider>
    <DarkModeProvider>
    <ScrollToTop />
    <main> 
      <Header />
        <section className={`container ${location.pathname === '/mentions' || location.pathname === '/politique' ? 'ml' : ''}`}>
          <Outlet />
        </section>
    </main>
    <Footer />
    </DarkModeProvider>
    </MenuHeaderProvider>
  ); 
}



const App = () => {

  return (
        <BrowserRouter>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio/:url" element={<Projet />} />
              <Route path="/mentions" element={<Mentions />} />
              <Route path="/politique" element={<Politique />} />
            </Route>

          </Routes>
        </BrowserRouter>
  )
}

export default App
