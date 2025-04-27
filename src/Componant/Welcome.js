import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./Welcome.css";
import vd from "../Videos/back-2.mp4";
import vm from "../Videos/back-3.mp4";
import emailjs from "@emailjs/browser";

function Welcome() {
  const location = useLocation();
  const form = useRef();
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const mis = [
    { content: "Innovative Digital Solutions – Crafting scalable and efficient web & mobile applications, embedded systems, and IoT solutions." },
    { content: "Technology for Businesses & Individuals – Delivering customized tech solutions that enhance productivity and user experience." },
    { content: "Automation & Product Development – Innovating in automation, AI, and smart technologies to improve efficiency and sustainability." },
    { content: "Future-Ready Digital Transformation – Ensuring businesses stay ahead with cutting-edge, secure, and high-performance solutions." },
    { content: "Education & Skill Development – Bridging the knowledge gap through industry-focused bootcamps and hands-on training." }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_7x945oj', 'template_hv6ng0c', form.current, 'sU9xJ7k3LDwn1HbCK')
      .then((result) => {
        alert("Message sent successfully!");
        setStatus("Message sent successfully!");
      }, (error) => {
        alert("Failed to send message. Try again.");
        setStatus("Failed to send message. Try again.");
      });
  };

  return (
    <>
      <div className='Wel'>
        <div className='vd'>
          <video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={vd} autoPlay muted loop />
        </div>
        <div className='we'>
          <span className='Welcome'>Welcome to Ezhumin Group</span>
          <p className='w-p'>
            At Ezhumin Group, we are passionate about empowering businesses and individuals through cutting-edge technology, AI-driven solutions, and world-class digital experiences. Our team specializes in web development, AI & ML solutions, embedded systems, automation, and innovative product design.
          </p>
        </div>
      </div>

      <div id="About" className='About'>
        <div className='Abtit'><div>Who We Are</div></div>
        <div className='AbCon'>
          <div className="Quiz">Why Ezhumin Group?</div>
          <div className='Ans'>
            Ezhumin Group is a technology-driven company specializing in software development, automation, IoT, and education. We are dedicated to empowering businesses and individuals through cutting-edge solutions and hands-on training.
          </div>

          <div className="Quiz">Our Strength</div>
          <div className='Ans'>
            <ul>
              <li>Expert-led web & mobile development</li>
              <li>Advanced AI & IoT automation solutions</li>
              <li>Industry-driven bootcamps & mentorship programs</li>
              <li>Innovative & client-centric approach</li>
            </ul>
          </div>

          <div className="Quiz">What We Do?</div>
          <div className='Ans'>
            <ul>
              <li>Build Smart & Scalable Web & Mobile Applications</li>
              <li>Develop AI & ML-based Intelligent Systems</li>
              <li>Innovate with Embedded Systems & Robotics</li>
              <li>Offer Tech Bootcamps & Training Programs</li>
            </ul>
          </div>
        </div>

        <div className='vm'>
          <div className='vd'>
            <video style={{ height: "100%", width: "100%", objectFit: "cover" }} src={vm} autoPlay muted loop />
          </div>

          <div className='vision'>
            <div className='vstit'>Vision</div>
            <div className='vscon'>
              <p>
                To be a trusted technology partner that empowers businesses and individuals through innovative digital solutions, automation, and tech education, shaping a future-ready world.
              </p>
            </div>
          </div>

          <div className="mission">
            <div className='vstit'>Mission</div>
            <div className='vscon'>
              {mis.map((item, index) => (
                <p key={index} className='licon'>{item.content}</p>
              ))}
            </div>
          </div>
        </div>

        <div id="Contact" className="about">
          <div className='abcon'>
            <div className='ab-blur'></div>
            <form ref={form} onSubmit={sendEmail} className="abcon">
              <input id="input" type="text" name="name" placeholder="Enter Your Name" required />
              <input id="input" type="email" name="email" placeholder="Enter your Mail ID" required />
              <input id="input" type="text" name="subject" placeholder="Enter Subject" required />
              <input id="input" type="text" name="message" placeholder="Enter Message" required />
              <button id="snd" type="submit">Send</button>
              <div style={{ marginTop: "10px", color: "lightgreen" }}>{status}</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
