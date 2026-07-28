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
import { DarkModeProvider } from "./contexts/DarkModeContext";
import {MenuHeaderProvider } from "./contexts/MenuHeaderContext";


const MainLayout = () => {

  return (
    <MenuHeaderProvider>
    <DarkModeProvider>
    <main> 
      <Header />
        <section className="container hp">
          <Outlet />
        </section>
    </main>
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
            
            </Route>

          </Routes>
        </BrowserRouter>
  )
}

export default App
