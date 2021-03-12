import "./styles.css";
import React, { useState } from "react";
import Logo from "../assets/venn-diagram.svg";
import Icon from "../assets/brightness.svg";

export default function App() {
  const [theme, setTheme] = useState(true);
  const color = theme ? "White" : "Dark";

  if (theme) {
    document.body.classList.remove("DarkMode");
    document.body.classList.add("WhiteMode");
  } else {
    document.body.classList.remove("WhiteMode");
    document.body.classList.add("DarkMode");
  }

  const formSubmit = () => {
    setTimeout(() => {
      window.location.reload();
    }, 1600);
  };

  return (
    <div className="App">
      <div className={`flexContainer fc-${color}`}>
        <div className="img">
          <img src={Logo} alt="KidsLoop Logo" />
        </div>

        <div className={`msg-${color}`}>
          <h2>Sign In</h2>
        </div>

        <form id="signIn" onSubmit={formSubmit}>
          <div className="formContainer">
            <section>
              <div className="inputWrapper">
                <input
                  className={`in-${color}`}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email or Phone *"
                  autoComplete="username"
                  required
                />
              </div>
            </section>

            <section>
              <div className="inputWrapper">
                <input
                  className={`in-${color}`}
                  id="current-password"
                  name="current-password"
                  type="password"
                  placeholder="Password *"
                  autoComplete="current-password"
                  required
                />
              </div>
            </section>
            <div className="nextLayer">
              <h5 id="forgot" className={`h5-${color}`}>
                Forgot Password?
              </h5>
              <button id="signbtn">Sign In</button>
            </div>
            <section>
              <div id="create">
                <h5 className={`h5-${color}`}>Create an account</h5>
              </div>
            </section>
          </div>
        </form>
      </div>
      <div className={`footer-${color}`}>
        <div id="icon">
          <img src={Icon} alt="Brightness" onClick={() => setTheme(!theme)} />
        </div>
        <div id="menu">
          <select className={`se-${color}`}>
            <option selected disabled hidden>
              Select Language
            </option>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="kr">한국어</option>
            <option value="cn">中文</option>
          </select>
        </div>
        <div id="links" className={`link-${color}`}>
          <span>Help</span>
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </div>
  );
}
