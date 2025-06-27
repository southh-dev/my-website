
import React from 'react';
import './Home.css';
import profileImage from '../assets/profile.png'; 

export default function Home() {
  return (
    <main className="home">
      <div className="home-container">
        <div className="home-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="home-text">
          <h2>Hey, I'm South</h2>
          <p>
            I'm a full-stack developer who loves building sleek, functional websites.
            I focus on clean code, great UI, and intuitive user experience.
          </p>
        </div>
      </div>
    </main>
  );
}