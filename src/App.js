import React from 'react';

import "./App.css";
//components
import WelcomeCard from "./components/welcomeCard/WelcomeCard";
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
  return (
    <>
      <WelcomeCard />
      <Testimonials />
    </>
  );
};

export default App;
