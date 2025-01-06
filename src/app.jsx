import React from 'react';
import './assets/styles/global.css';
import Header from './components/Header';
import Title from './components/Title';
import Container from './components/Container';
import ContactDetails from './components/ContactDetails';

const App = () => {
  return (
    <div className="app-container">
      {/* Render the Header component */}
      <Header />
      <Title />
      <Container /> {/* All sections (home, about, projects, contact) are within this */}
      <ContactDetails />
    </div>
  );
};

export default App;