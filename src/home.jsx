import React, { useEffect, useState } from "react";
import "./home.css";
import { FiActivity } from "react-icons/fi";
import { GiMeal } from "react-icons/gi";
import { BiDroplet } from "react-icons/bi";
import video from "./assets/frog-video.mp4";
import frog from "./assets/frog-icon.png";
import { RiTwitterXFill } from "react-icons/ri";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { IoPlaySkipBackSharp, IoPlaySkipForward } from "react-icons/io5";
import { CgPlayStopO } from "react-icons/cg";
import { TbPlaylistAdd } from "react-icons/tb";

export const App = () => {
  const [metrics, setMetrics] = useState({
    activity: 78,
    food: 32,
    water: 85,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        activity: Math.floor(60 + Math.random() * 40),
        food: Math.floor(20 + Math.random() * 30),
        water: Math.floor(70 + Math.random() * 30),
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>
          <span className="logo-icon">🧪</span> Trenches Frog Science
        </h1>
        <div className="df aic header-buttons">
          <button className="df aic gap-10">
            <RiTwitterXFill style={{ transform: "scale(1.4)" }} />
          </button>
          <button className="df aic gap-10">
            <span>▶ </span>LIVE FEED
          </button>
          <button>EXPORT</button>
          <button>ALERTS</button>
        </div>
      </header>

      <div className="df fw dashboard-main">
        <section className="chamber-section">
          <h2>Observation Chamber #4</h2>
          <div className="chamber-image">
            <video autoPlay loop muted>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <span className="chamber-id">R-240</span>
            <div className="df aic gap-5 actions">
              <button className="df aic jcc">
                <IoPlaySkipBackSharp />
              </button>
              <button className="df aic jcc">
                <CgPlayStopO />
              </button>
              <button className="df aic jcc">
                <IoPlaySkipForward />
              </button>
              <button className="df aic jcc">
                <TbPlaylistAdd />
              </button>
            </div>
          </div>

          <div className="chamber-stats">
            <div className="stat">
              <p className="label">ACTIVE SUBJECTS</p>
              <h3>5</h3>
              <p>In experiment</p>
            </div>
            <div className="stat">
              <p className="label">CHAMBER TEMP</p>
              <h3>24.3°C</h3>
              <p>23 - 26°C</p>
            </div>
            <div className="stat">
              <p className="label">HUMIDITY</p>
              <h3>52%</h3>
              <p>Optimal range</p>
            </div>
          </div>
        </section>

        <aside className="subjects-section">
          <div className="w100 df aic jcsb gap-10 input-header">
            <h2>SUBJECTS</h2>
            <input type="text" placeholder="Search subjects..." />
          </div>
          <div className="subject-list">
            <div className="subject-item">
              <img src={frog} alt="FR-357" />
              <div className="details">
                <p>SUBJECT FR-357</p>
                <p>02/25 - 10:18AM</p>
                <p>3 HOURS AGO</p>
              </div>
            </div>
            <div className="subject-item">
              <img src={frog} alt="FR-358" />
              <div className="details">
                <p>SUBJECT FR-358</p>
                <p>02/24 - 5:44PM</p>
                <p>16 HOURS AGO</p>
              </div>
            </div>
          </div>
        </aside>
        <div className=" w100 metrics">
          <div className="metric">
            <div className="w100 df aic jcsb label">
              <p className="df aic gap-15">
                <FiActivity /> ACTIVITY
              </p>

              <div className="df aic gap-10 icons">
                <button className="df aic jcc">
                  <BsMenuButtonWideFill />
                </button>
                <button className="df aic jcc">
                  <BiFoodMenu />
                </button>
              </div>
            </div>
            <div className="bar-wrapper">
              <div
                className="bar"
                style={{ width: `${metrics.activity}%` }}
              ></div>
            </div>
            <h3>{metrics.activity}%</h3>
            <p>
              LAST: {metrics.activity + 10}% | AVG: {metrics.activity + 5}%
            </p>
          </div>
          <div className="metric">
            <div className="w100 df aic jcsb label">
              <p className="df aic gap-15">
                <GiMeal /> FOOD
              </p>
              <div className="df aic gap-10 icons">
                <button className="df aic jcc">
                  <BsMenuButtonWideFill />
                </button>
                <button className="df aic jcc">
                  <BiFoodMenu />
                </button>
              </div>
            </div>
            <div className="bar-wrapper">
              <div className="bar" style={{ width: `${metrics.food}%` }}></div>
            </div>
            <h3>{metrics.food}%</h3>
            <p>
              LAST: {metrics.food + 10}% | AVG: {metrics.food + 5}%
            </p>
          </div>
          <div className="metric">
            <div className="w100 df aic jcsb label">
              <p className="df aic gap-15">
                <BiDroplet /> WATER
              </p>
              <div className="df aic gap-10 icons">
                <button className="df aic jcc">
                  <BsMenuButtonWideFill />
                </button>
                <button className="df aic jcc">
                  <BiFoodMenu />
                </button>
              </div>
            </div>
            <div className="bar-wrapper">
              <div className="bar" style={{ width: `${metrics.water}%` }}></div>
            </div>
            <h3>{metrics.water}%</h3>
            <p>
              LAST: {metrics.water + 10}% | AVG: {metrics.water + 5}%
            </p>
          </div>
        </div>
      </div>
      <footer className="w100 df fdc aic jcc gap-10 dashboard-footer">
        <p>© Trenches Frog Science</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
};
