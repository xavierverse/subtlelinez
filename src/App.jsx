import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import clip from '../././public/background-vid.mp4'
import './App.css'

function ServicesButton() {
  return <button className="services-btn">Services</button>
}

function PortfolioButton() {
  return <button className="portfolio-btn">Portfolio</button>
}

function AboutButton() {
  return <button className="about-btn">About</button>
}

function ContactButton() {
  return <button className="contact-btn">Contact</button>
}

function BookButton() {
  return <button class="book-btn"></button>
}

function Navbar() {
  return (
    <div class="navbar">
      <ServicesButton />
      <PortfolioButton />
      <AboutButton />
      <ContactButton />
    </div>
  );
}

function Background() {
  return <video className="background" autoPlay loop muted>
    <source src={clip} type='video/mp4'></source>
  </video>
}

function App() {
  return (
  <div class="app">
    <Navbar />
    <Background />
  </div>
  );
}


export default App
