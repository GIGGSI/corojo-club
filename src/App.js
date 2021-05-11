import React, { useState } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import Navbar from './components/Navbar/Navbar'
import {
  Switch,
  Route,
} from "react-router-dom";


import GlobalStyle from './GlobalStyles'
import HomePage from './pages/HomePage';
import Coffe from './pages/Coffe';
import Beer from './pages/Beer';
import Events from './pages/Events';
import ErrorPage from './pages/Errorpage';
import ScrollToTop from "./SctrollToTheTop";

// cigras pages
import Padron from './pages/Cigars/Padron';
import ArturoFuente from './pages/Cigars/ArturoFuente';
import Olivia from './pages/Cigars/Olivia';
import Nub from './pages/Cigars/Nub';
import Cain from './pages/Cigars/Cain';
import LaGarela from './pages/Cigars/LaGarela'
import LaFlorDominicana from './pages/Cigars/LaFlorDominicana';
import Ciboa from './pages/Cigars/Ciboa';
import SingleBlogPage from './pages/SingleBlogPage';

import Footer from './components/Footer/Footer';
import SingleCigarPadron from './pages/Cigars/SingleCigarPadron';
import SingleCigarArturoFuente from './pages/Cigars/SingleCigarArturoFuente';
import SingleCigarOlivia from './pages/Cigars/SingleCigarOlivia'
import SingleCigarNub from './pages/Cigars/SingleCigarNub'
import SingleCigarLaGarela from './pages/Cigars/SingleCigarLaGarela'
import SingCigarLaFlorDominicana from './pages/Cigars/SingCigarLaFlorDominicana'
import SingleCigarCiboa from './pages/Cigars/SingleCigarCiboa'
import SingleCigarCain from './pages/Cigars/SingleCigarCain'



function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return <>
    <GlobalStyle />
    <ScrollToTop />
    <Navbar toggle={toggle} />
    <Dropdown isOpen={isOpen} toggle={toggle} />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/coffe" component={Coffe} />
      <Route path="/beer" component={Beer} />
      <Route path="/events" component={Events} />
      <Route path="/blog/:id" component={SingleBlogPage}>
        {/* <SingleBlogPage /> */}
      </Route>
      <Route path='/cigar/padron' component={Padron} />
      <Route path='/padron/:id' component={SingleCigarPadron} />
      <Route path="/cigar/arturo-fuente" component={ArturoFuente} />
      <Route path='/arturo-fuente/:id' component={SingleCigarArturoFuente} />

      <Route path="/cigar/oliva" component={Olivia} />
      <Route path='/olivia/:id' component={SingleCigarOlivia} />

      <Route path="/cigar/nub" component={Nub} />
      <Route path='/nub/:id' component={SingleCigarNub} />

      <Route path="/cigar/cain" component={Cain} />
      <Route path="/cain/:id" component={SingleCigarCain} />

      <Route path="/cigar/la-garela" component={LaGarela} />
      <Route path="/la-garela/:id" component={SingleCigarLaGarela} />

      <Route path="/cigar/la-flor-dominicana" component={LaFlorDominicana} />
      <Route path="/la-flor-dominicana/:id" component={SingCigarLaFlorDominicana} />

      <Route path="/cigar/ciboa" component={Ciboa} />
      <Route path="/ciboa/:id" component={SingleCigarCiboa} />
      <Route path="*" component={ErrorPage} />
    </Switch>
    <Footer />

  </>
}

export default App;
