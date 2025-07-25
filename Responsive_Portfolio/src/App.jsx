import React from 'react';
import './App.css';
import Hero from './components/Hero'; 
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SceneBackground from './components/SceneBackground';

const App = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <SceneBackground />
      <div className="relative z-10 w-full h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="snap-start h-screen"><Hero /></section>
        <section className="snap-start h-screen"><About /></section>
        <section className="snap-start h-screen"><Skills /></section>
        <section className="snap-start h-screen"><Projects /></section>
        <section className="snap-start h-screen"><Certifications /></section>
        <section className="snap-start h-screen"><Contact /></section>
      </div>
    </div>
  );
};

export default App;
