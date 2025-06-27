import React from 'react';

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>My Personal Website</h1>
      <nav>
        <a href="#home">Home</a> | 
        <a href="#about">About</a> | 
        <a href="#projects">Projects</a>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: '#282c34',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
};