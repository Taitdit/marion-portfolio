import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";


import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Header from "./components/Header";
import Footer from './components/Footer';
import { DarkModeProvider } from "./contexts/DarkModeContext";
import {MenuHeaderProvider } from "./contexts/MenuHeaderContext";
import ScrollToTop from "./components/ScrollToTop";
import Projet from "./pages/Projet";

const MainLayout = () => {


  return (
    <MenuHeaderProvider>
    <DarkModeProvider>
    <ScrollToTop />
    <main> 
      <Header />
        <section className="container hp">
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
            </Route>

          </Routes>
        </BrowserRouter>
  )
}

export default App
