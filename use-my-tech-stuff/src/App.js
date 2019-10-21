import React from 'react';
import './App.css';
import TechContextProvider from './contexts/MyRentalsContext'
import RentersList from './components/RentersList';
import RentersForm from './components/RentersForm';

function App() {
  return (
    <div className="App">
      <h2>Use My Tech Stuff</h2>
      <TechContextProvider>
        <RentersList />
        <RentersForm />
      </TechContextProvider>
    </div>
  );
}

export default App;
