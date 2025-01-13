import React from 'react';
import './Home.css';
import bman from '../videos/bman-updated.mp4';

function Home() {
  return (
    <div className='homepage'>
     <video autoPlay muted loop>
  <source src={bman} type="video/mp4"/>
</video>
<div className='heading'>
  <h1>Welcome to my Portfolio</h1>
  <button>View Portfolio</button>
</div>
    </div>
  )
}

export default Home
