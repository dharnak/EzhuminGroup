import React from 'react';
import './Portfolio.css'
import img1 from "../Images/1.png"
import img2 from "../Images/2.png"
import img3 from "../Images/3.png"
import img4 from "../Images/4.png"
import img5 from "../Images/5.png"
import img6 from "../Images/6.png"
import img7 from "../Images/7.png"
import img8 from "../Images/8.png"
import Revive from "../SM/Revive.jpg"
import Clasic from "../SM/Classic.jpg"
import last from "../Images/last.jpg"

const Portfolio = () => {
  let products = [
    {Type:"Web", Des:"E-commerce Website to sell/buy mechanical tools", Title:"MechMart", Image:img1},
    {Type:"Web", Title:"College Bus Allocation System", Des:"Bus tracking and management System for college", Image:img2},
    {Type:"Web", Title:"Enhancing Satellite Imagery Using AI model", Des:"Enhance satellite image for getting more details about the picture", Image:img3},
    {Type:"Web", Title:"GenPic", Des:"Image generation AI with help of API", Image:img4},
    {Type:"Web", Title:"Brain tumor detection using AI", Des:"An AI-powered system to predict brain tumor early", Image:img5},
    {Type:"Web", Title:"Native Snack", Des:"Quick-commerce application to get authentic snacks like Manaparai Murukku, Thirunelveli Halwa etc.", Image:img6},
    {Type:"Web", Title:"Choose a Best", Des:"Dress matching AI assistant to choose matching dress", Image:img7},
    {Type:"Web", Title:"LandLens", Des:"Enable Branding website for real estate promoters with 360 degree land view", Image:img8},
    {Type:"Web", Title:"Upcoming Project", Des:"Get collab with us to build something", Image:last},
  ];

  let SocialMedia = [
    {Name:"Revive Holidays", Image:Revive, link:"https://www.instagram.com/revive_holidayss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
    {Name:"Classic Raider", Image:Clasic, link:"https://www.instagram.com/classicridercafe_kollampalayam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
    {Name:"Upcoming project", Image:last}
  ];

  return (
    <div className='container_port'>
      <div className='Title-p'>Web and AI/ML products and Services</div>
      <div className='Customer-con'>
        <div className='Blur-p'></div>
        <div className='Customer'>
          {products.map((e, index) => (
            <div className='Div-p' key={index}>
              <div className='Details-p'>
                <span>{e.Title}</span>
                <p>{e.Des}</p>
              </div>
              <img style={{height:"100%", width:"100%", borderRadius:"10px"}} src={e.Image} alt={e.Title} />
            </div>
          ))}
        </div>
      </div>

      <div className='Title-p'>Social Media Marketing Clients</div>
      <div className='Customer-con'>
        <div className='Blur-p'></div>
        <div className='Customer'>
          {SocialMedia.map((e, index) => (
            <div className='Div-p' key={index}>
              {e.link ? (
                <a href={e.link} target="_blank" rel="noopener noreferrer">
                  <img style={{height:"100%", width:"100%", borderRadius:"10px"}} src={e.Image} alt={e.Name} />
                </a>
              ) : (
                <img style={{height:"100%", width:"100%", borderRadius:"10px"}} src={e.Image} alt={e.Name} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
