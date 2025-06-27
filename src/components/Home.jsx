import React from 'react';

export default function Home() {
  return (
    <main style={mainStyle} id="home">
      <h2>Welcome!</h2>
      <p>This is my React-33ased home page. I’ll put some intro text here.</p>
    </main>
  );
}

const mainStyle = {
  padding: '2rem',
  lineHeight: 1.6,
};