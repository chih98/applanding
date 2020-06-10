import React from 'react';
import logo from './img/logo.png';
import SuperEllipse, { Preset } from 'react-superellipse';
import { ParallaxHover } from 'react-parallax-hover';
import { usePalette } from 'react-palette';
import './App.css';

// TODO: add react helmet

function App() {

  const { data } = usePalette(logo);

  return (
    <div className="App">
      
      <div style={{ marginTop: "10vh" }}>
      <ParallaxHover style={{ backgroundColor: "transparent" }} rotation={5} scale={2} shadow={2} borderRadius={76} width={300} height={300}>
        <SuperEllipse r1={Preset.iOS.r1} r2={Preset.iOS.r2} style={{ width: "101%", height: "101%" }}>
          <img src={logo} style={{ width: "100%", height: "100%" }} />
        </SuperEllipse>
      </ParallaxHover>
      <h1 className="title">App Name</h1>
      <h2>Quick app description</h2>
      </div>
      <div className="waitlist">
        <input className="waitlist" placeholder="Join the Waitlist"></input>
        <button className="waitlist" style={{ backgroundImage: `linear-gradient(to bottom right, ${data.lightVibrant}, ${data.darkVibrant}` }}>Sign Up</button>
      </div>

    </div>
  );
}

export default App;
