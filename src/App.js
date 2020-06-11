import React from 'react';
import logo from './img/logo.png';
import SuperEllipse, { Preset } from 'react-superellipse';
import { ParallaxHover } from 'react-parallax-hover';
import { usePalette } from 'react-palette';
import './App.css';

// TODO: add react helmet

function App() {

  const { data } = usePalette(logo);

  var emailAddress;

  function validateAddress() {
    var ret = true;

    if (!emailAddress) {
      return false;
    }

    if (emailAddress.replace(" ", "").replace("@", "").replace(".", "").localeCompare("") === 0) {
      return false;
    }

    if (!emailAddress.includes("@")) {
      return false;
    }

    if (!emailAddress.includes(".")) {
      return false;
    }

    return ret;
  }

  function sendMailchimp() {

    if (!validateAddress()) {
      alert("Please enter a valid email address.");
      return;
    }
    document.getElementById("MERGE0").value = emailAddress;
    document.getElementById("mc-form").submit();
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMailchimp();
    }
  }
    
  return (
    <div className="App">
      
      <div style={{ marginTop: "10vh", alignItems: "center" }}>
        <ParallaxHover style={{ backgroundColor: "transparent" }} rotation={5} scale={2} shadow={2} borderRadius={window.innerWidth > 800 ? 76 : 37} width={window.innerWidth > 800 ? 300 : 180} height={window.innerWidth > 800 ? 300 : 180}>
          <SuperEllipse r1={Preset.iOS.r1} r2={Preset.iOS.r2} style={{ width: "101%", height: "101%" }}>
            <img src={logo} alt="App logo with parallax effect on mouseover." style={{ width: "100%", height: "100%" }} />
          </SuperEllipse>
        </ParallaxHover>
      </div>
      <div className="description">
        <h1 className="title">AppLanding</h1>
        <h2>This is a super quick and easy waitlist page. Sign up below if you would like to be notified when this officially launches. I bulit it in a day, and I'll work on a script/tool to make it user friendly when I have time.</h2>
      </div>
      <div className="waitlist">
        <input type="email" onChange={event => emailAddress = event.target.value} onKeyDown={e => handleKeyDown(e)} className="waitlist" placeholder="Join the Waitlist"></input>
        <button className="waitlist" onClick={() => sendMailchimp()} style={{ backgroundImage: `linear-gradient(to bottom right, ${data.lightVibrant}, ${data.darkVibrant}` }}>Sign Up</button>
      </div>
      <form style={{ display: "none" }} id="mc-form" action="https://mbobpro.us10.list-manage.com/subscribe/post" method="POST">
        <input type="hidden" name="u" value="35c02149bb25b588bf379cafc"></input>
        <input type="hidden" name="id" value="cccb924d8b"></input>
        <input type="email" name="MERGE0" id="MERGE0"></input>
      </form>
    </div>
  );
}

export default App;
