import React from 'react'
import "./Service.css"
import vd from "../Videos/Service.mp4"
import img from "../Videos/Web.jpeg"
import img1 from "../Videos/AI.jpeg"
import img2 from "../Videos/Course.jpeg"
function Service() {

  const Web = [
    {e:" Business Websites & Portfolios"},
     { e: "E-Commerce Solutions"},
     { e:"Custom Web Applications"},
      {e:"Performance Optimization"}
  ]

  const AI = [
    {header: "Intelligent Automation for Business Smart solutions to automate, analyze, and innovate."},
    {list:"AI Chatbots & Virtual Assistants"},
    {list:"Data Analytics & Predictive Modeling"},
    {list:"Machine Learning for Business Optimization"},
    {list:"AI-Powered Content & Image Processing"},
    {footer:"Empower your business with next-gen AI technology!"},
  ]
  const Course = [
    {header: "Learn with us!!!"},
    {list:"Workhop"},
    {list:"Webinar"},
    {list:"Value added course"},
    {list:"MERN, AI&ML, Programing languege Course"},
    {footer:"Upskill with Ezhumin: Expert-led courses in tech, design, and content creation!"},
  ]


  
  return (
    <>
    <div className='ServiceHolder'>
    <div className='vd'> 
    
        <video style={{height:"100%", width:"100%", objectFit:"cover"}} src={vd} autoPlay muted loop>
            </video></div>
            <div className='service'>
                <div className='blur'></div>
                <div className='Sertit'>Our Services</div>
                <div className='Sercon'><p>
At Ezhumin Group, we offer a diverse range of creative, digital, and AI-powered solutions tailored to your business and personal needs. Whether you're an entrepreneur, a content creator, or a company looking to establish a strong digital presence, we've got you covered!</p></div>
            </div>
            <div className='whatwe'>
                <div className='blur'></div>
                <div className='Sertit'>What We Do?</div>
                <div className='Sercon'>
                    <ul>
                        <li style={{textIndent:"1px"}}>Build Smart & Scalable Web & Mobile Applications</li>
                        <li style={{textIndent:"1px"}} > Develop AI & ML-based Intelligent Systems</li>
                        <li style={{textIndent:"1px"}} >Innovate with Embedded Systems & Robotics</li>
                        <li style={{textIndent:"1px"}} >Offer Tech Bootcamps & Training Programs</li>
                    </ul>
                    </div>
                </div>   
    </div>
    <div className='Portmini'>
        <div className='mpgird'>
          <div className='mpele1'>
          <div className='Cocon'>
            <p>We create stunning, responsive, and fast websites that make an impact.</p>
            <ul>
              {Web.map(e=>{
                return(
                  <>
                  <li>{e.e}</li>
                  </>
                )
              })}
            </ul>
            <p>From idea to execution, we ensure your online presence stands out!</p>
          </div>
          <div className='Codet'>
          <div className='Cotit'><h1 style={{color:"#F9CB43"}}>Web Development</h1> <p>Build Your Digital Identity</p></div>

          </div>
            <img src={img} style={{height:"100%",width:"100%",objectFit:"fit", borderRadius:"10px"}} alt="" />
          </div>
          <div className='mpele2'>
          <div className='Cocon'>
            <p>{AI[0].header}</p>
            <ul>
              {AI.map(e=>{
                return(
                 <>
                 {e.list==null ? <></> : <><li>{e.list}</li></>}
                 </>
                ) 
              })}
            </ul>
            <p> {AI[AI.length-1].footer} </p>
          </div>
          <div className='Codet'>
          <div className='Cotit'><h1 style={{color:"#F9CB43"}}>AI&ML Development</h1> <p>Crafting the future with intelligent code.
</p></div>

          </div>
            <img src={img1} style={{height:"100%",width:"100%",objectFit:"fit", borderRadius:"10px"}} alt="" />
          </div>
          <div className='mpele3'>
          <div className='Cocon'>
          <p>{Course[0].header}</p>
            <ul>
              {Course.map(e=>{
                return(
                 <>
                 {e.list==null ? <></> : <><li>{e.list}</li></>}
                 </>
                ) 
              })}
            </ul>
            <p> {Course[Course.length-1].footer} </p>
          </div>
          <div className='Codet'>
          <div className='Cotit'><h1 style={{color:"#F9CB43"}}>Our Courses</h1> <p>Learn, Create, Innovate!</p></div>

          </div>
          <img src={img2} style={{height:"100%",width:"100%",objectFit:"contain", borderRadius:"10px"}} alt="" />
          
          </div> 
        </div>
    </div>
    </>

  )
}

export default Service