
import React from "react";
import {FaWhatsappSquare} from 'react-icons/fa'
// import {BsInstagram} from 'react-icons/bs'
// import {CiFacebook} from 'react-icons/ci'
// import {AiOutlineYoutube} from 'react-icons/ai'
import {MdOutlineAlternateEmail} from 'react-icons/md'

const Contact = () => {
     return (
          <>
               <h1 className='contact-heading' id="contact-heading">Contact Us</h1>
               <div className='contact-section'>
                    <iframe
                         src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3354330160472316!3d48.87456857928921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e38f817b573%3A0x48d69c30470e7aeb!2sIronhack!5e0!3m2!1sen!2ses!4v1495208746099'
                         className='map-frame'
                         frameBorder={0}
                         style={{ border: 0 }}
                         allowFullScreen=''
                    />
                    <section className='contact-options'>
                         <div className='contact-number'>
                              <div className='whats-app-contact'>
                              <FaWhatsappSquare/> &nbsp;
                              <p>+977-9803813450</p>
                              </div>
                         </div>
                         <div className='contact-social'>
                         {/* <BsInstagram/>
                         <CiFacebook/>
                         <AiOutlineYoutube/> */}
                         <MdOutlineAlternateEmail/> &nbsp;
                        <p className="email-id">dr.club035@gmail.com</p>
                         </div>
                         <div className='contact-address'>
                            <h3 style={{color:"red"}}>Address: </h3>
                              <p style={{ fontSize: "17px" }}>Dr Zaffar Alam, Amar Chowk, Jail Road</p>
                              <h4 style={{ fontSize: "20px" }}>Birgunj-5, Parsa, Nepal</h4>
                         </div>
                    </section>
               </div>
          </>
     );
};

export default Contact;
