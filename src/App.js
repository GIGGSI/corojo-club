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
import Contacts from './pages/Contacts';
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
      <Route path="/contacts" component={Contacts} />
      <Route path='/cigar/padron' component={Padron} />
      <Route path="/cigar/arturo-fuente" component={ArturoFuente} />
      <Route path="/cigar/oliva" component={Olivia} />
      <Route path="/cigar/nub" component={Nub} />
      <Route path="/cigar/cain" component={Cain} />
      <Route path="/cigar/la-garela" component={LaGarela} />
      <Route path="/cigar/la-flor-dominicana" component={LaFlorDominicana} />
      <Route path="/cigar/ciboa" component={Ciboa} />
      <Route path="*" component={ErrorPage} />
    </Switch>
    <Footer />

  </>
}

export default App;
