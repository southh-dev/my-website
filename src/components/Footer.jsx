import React from 'react';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© {new Date().getFullYear()} Kacper Podlewski - southdev. All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#20232a',
  color: 'lightgray',
  padding: '1rem',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};