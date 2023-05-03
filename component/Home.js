import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import sunflower from '../assets/sunflower.png';
import starryNight from '../assets/starry_night.jpg';
import headerImg from '../assets/van_gogh_self_portrait.jpg';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="page"
      style={{ backgroundImage: `url(${starryNight})` }}
    >
      <header>
        <img src={headerImg} alt="Vincent van Gogh" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/art">Art</a>
            </li>
            <li>
              <a href="/archive">Archive</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <motion.section
        className="banner"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <h2>"I am seeking, I am striving, I am in it with all my heart."</
