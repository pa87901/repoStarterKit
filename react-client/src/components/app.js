import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NavBar from './headerComponent/NavBar';
import Footer from './footerComponent/Footer';

const App = () => (
  <BrowserRouter>
    <div>
      <NavBar />
      <Route name="home" exact path="/" component={HomePage} />
      <Route name="about" exact path="/about" component={AboutPage} />
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
