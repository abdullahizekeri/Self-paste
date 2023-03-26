// import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';
import React from 'react';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
       <MainContent />
      </div>
      <Footer />
    </div>
  );
}
export default App;
