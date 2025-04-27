import './App.css';
import Welcome from './Componant/Welcome';
import Service from './Componant/Service';
import Navbar from './Componant/Navbar';
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom';
import Portfolio from './Componant/Portfolio';
import Events from './Componant/Events';
import { useEffect } from 'react';
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
function App() {
  return (
<>

<BrowserRouter>
<ScrollToTop />
<Navbar />
<Routes>
   
  <Route path="/"  element={<Welcome />}/>
  <Route path="/Service"  element={<Service />}/>
   <Route path="/Portfolio"  element={<Portfolio />}/>
   <Route path="/Events"  element={<Events />}/>

</Routes>
</BrowserRouter>

</>
  );
}

export default App;
