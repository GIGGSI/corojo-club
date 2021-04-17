import React, { useState } from 'react';
import Dropdown from './components/Dropdown/Dropdown';
import Navbar from './components/Navbar/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import GlobalStyle from './GlobalStyles'
import HomePage from './pages/HomePage';
import Coffe from './pages/Coffe';
import Beer from './pages/Beer';
import Events from './pages/Events';
import Contacts from './pages/Contacts';
import SingleCigarPage from './pages/SingleCigarPage';
import ErrorPage from './pages/Errorpage';
import ScrollToTop from "./SctrollToTheTop";



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
      <Route path="/contacts" component={Contacts} />
      <Route path="/cigar/:slug">
        <SingleCigarPage />
      </Route>
      <Route path="*" component={ErrorPage} />
    </Switch>

  </>
}

export default App;
