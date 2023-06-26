import React from 'react'
import './About.css'
import { aboutContent } from '../../db/db2'
import { impactContent, commentContent } from '../../db/db'
import { applyContent } from '../../db/db2';

import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className='about'>
            {aboutContent.map((item) => (
                <div key={item.id} className="about-header">
                    {item.id === "0" && (
                        <div>
                            <div className="about-header-img"></div>
                            <div className="about-header-txt container">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {aboutContent.map((item) => (
                <div key={item.id} className="about-main-title container">
                    {item.id === "0" && (
                        <div>
                            <h3>{item.subtitle}</h3>
                        </div>
                    )}
                </div>
            ))}

            {aboutContent.map((item) => (
                <div key={item.id} className="about-main container">
                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content1}</p>
                        </div>
                    )}

                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content2}</p>
                        </div>
                    )}

                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content3}</p>
                        </div>
                    )}

                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content4}</p>
                        </div>
                    )}
                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content5}</p>
                        </div>
                    )}
                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content6}</p>
                        </div>
                    )}
                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content7}</p>
                        </div>
                    )}
                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content8}</p>
                        </div>
                    )}
                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content9}</p>
                        </div>
                    )}
                    
                    {item.id === "1" && (
                        <div className="about-us">
                        
                                <div className="about-us" style={{
                                    fontFamily:`'Montserrat', sans-serif`,
                                    width: "85%", margin:" 2rem auto",justifySelf: "center",
                                    color: '#006588',

                                }}>
                                    <NavLink className="nav-link-apply" to='/apply-now' style={{
                                        color: "#003e54",
                                        fontStyle: "italic", fontWeight: "900",
                                        textDecoration:"none",
                                        cursor:"pointer",
                                        padding:"0.1rem 0",
                                        borderBottom:"1px solid #003e54"
                                    }}>Donate to our cause,
                                    </NavLink> {item.content10}
                                </div>
                            
                        </div>
                    )}



                </div>
            ))}

            <div className="homearticle2 shadow">
                {applyContent.map((item) => (
                    <div key={`homearticle2-${item.id}`} className="apply-now">
                        {item.id === "0" && (
                            <div className="apply-now-col">
                                <p>{item.content1}</p>
                                <p>
                                    <NavLink
                                        className="nav-link-apply"
                                        to='/apply-now'
                                        style={{ color: "#003e54", fontStyle: "italic", fontWeight: "900", marginRight: "5px" }}
                                    >
                                        Apply now
                                    </NavLink> {item.content2}
                                </p>
                            </div>
                        )}

                    </div>
                ))}
            </div>

            <div className='about-article'>
                <div className="impactReached">
                    {impactContent.map((item) => (
                        <div key={item.id} className="impactReached-col">
                            {item.id === "4" && (
                                <div className="iR-col1">
                                    <h1 className='ir-h1'>{item.title}</h1>
                                    <span className='ir-span'>{item.subtitle}</span>
                                    <p className='ir-p'>{item.content}</p>
                                    <p></p>
                                </div>
                            )}

                            {item.id === "5" && (
                                <div className="iR-col2">
                                    <h1 className='ir-h1'>{item.title}</h1>
                                    <span className='ir-span'>{item.subtitle}</span>
                                    <p className='ir-p'>{item.content}</p>
                                </div>
                            )}

                            {item.id === "6" && (
                                <div className="iR-col3">
                                    <h1 className='ir-h1'>{item.title}</h1>
                                    <span className='ir-span'>{item.subtitle}</span>
                                    <p className='ir-p'>{item.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="page-comment">
                {commentContent.map((item) => (
                    <div key={item.id} className="page-comment-container">
                        {item.id === "2" && (
                            <div className='page-comment-col'>
                                <div className="comment-img">
                                    <img src={item.img1} alt={item.name} className='img-fluid' />
                                </div>
                                <div className="comment-text about-comment-text">
                                    <p>
                                        {item.content}
                                        <span>
                                            &mdash; {item.name} {item.status}
                                        </span>
                                    </p>
                                </div>
                                <div className="comment-img">
                                    <img src={item.img2} alt={item.name} className='img-fluid' />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About