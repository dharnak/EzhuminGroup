import React, { useState } from 'react';
import './Events.css';
import Web from "../Events/Boot.png";
import web1 from "../Events/Bootcamp1.jpg";
import web2 from "../Events/Bootcapm2.jpg";
import boot from "../Events/Webinar.jpg";
import boot2 from "../Events/Webinar1.jpg";
import boot3 from "../Events/Webinar2.jpg";
import boot4 from "../Events/Webinar3.jpg";
import w2 from "../Events/W2.jpg";
import w1 from "../Events/W1.jpg";
import w3 from "../Events/W3.jpg";
import w4 from "../Events/W4.jpg";
import w5 from "../Events/W5.jpg";

const events = [
  {
    title: 'React JS Webinar',
    description: 'An in-depth session on building dynamic UIs with React.',
    images: [Web, web1, web2]
  },
  {
    title: 'Front End Boot Camp',
    description: 'Master HTML, CSS, and JavaScript in this intensive bootcamp.',
    images: [boot, boot2, boot3, boot4]
  },
  {
    title: 'AI Tools Workshop',
    description: 'Explore the latest AI tools for developers and creators.',
    images: [w2, w1, w4]
  },
  {
    title: 'IoT Workshop',
    description: 'Learn how to build smart devices and connected systems.',
    images: [w3, w5]
  }
];

const EventCard = ({ event }) => {
  const [index, setIndex] = useState(0);
  const total = event.images.length;

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex((index - 1 + total) % total);

  return (
    <div className="event-card">
      <div className="carousel">
        <div className="img-c">
          {/* ✅ Only one 'position' now */}
          <img style={{ height: "100%", width: "100%", objectFit: "cover", position: "relative" }} src={event.images[index]} alt={event.title} className="carousel-image" />
          <div className="C-But">
            <button className="carousel-button_left" onClick={prev}>‹</button>
            <button className="carousel-button_right" onClick={next}>›</button>
          </div>
        </div>
      </div>
      <div className="event-content">
        <h3>{event.title}</h3>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="events-container">
      <h2 className="events-title">Event by Ezhumin</h2>
      <div className="events-grid">
        {events.map((event, idx) => (
          <EventCard event={event} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Events;
