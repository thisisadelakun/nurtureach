import React from 'react'
import './Impact.css'
import { NavLink } from 'react-router-dom';
import { articleContent, whatWeDoContent, socialMediaContent } from '../../db/db'


const Impact = () => {

    return (
        <div className='impact'>
            {whatWeDoContent.map((item) => (
                <div key={item.id} className="impact-header">
                    {item.id === "0" && (
                        <div>
                            <div className="impact-header-img"></div>
                            <div className="impact-header-txt container shadow">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {whatWeDoContent.map((item) => (
                <div key={item.id} className="impact-main-title">
                    {item.id === "0" && (
                        <div>
                            <h3>{item.subtitle}</h3>
                        </div>
                    )}
                </div>
            ))}

            <div className="impact-main">

                {whatWeDoContent.map((item) => (
                    <div key={item.id} className="impact-main1">

                        {item.id === "1" && (
                            <div className="our-impact">
                                <div className='our-impact-left'>
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </div>
                                <div className='our-impact-right'>
                                    <img src={item.img} alt={item.title} width={300} />
                                </div>
                            </div>
                        )}

                        {item.id === "2" && (
                            <div className="our-impact">
                                <div className='our-impact-left'>
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </div>
                                <div className='our-impact-right'>
                                    <img src={item.img} alt={item.title} width={300} />
                                </div>
                            </div>
                        )}

                        {item.id === "3" && (
                            <div className="our-impact">
                                <div className='our-impact-left'>
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </div>
                                <div className='our-impact-right'>
                                    <img src={item.img} alt={item.title} width={300} />
                                </div>
                            </div>
                        )}

                        {item.id === "4" && (
                            <div className="our-impact">
                                <div className='our-impact-left'>
                                    <h5>{item.title}</h5>
                                    <p>{item.content}</p>
                                </div>
                                <div className='our-impact-right'>
                                    <img src={item.img} alt={item.title} width={300} />
                                </div>
                            </div>
                        )}

                    </div>
                ))}

                <div className="impact2">

                    {articleContent.map((item) => (
                        <div key={item.id} className="impact-header-2">
                            {item.id === "0" && (
                                <div className="impact-header-txt-2 container shadow">
                                    <h1>{item.title}</h1>
                                </div>
                            )}
                        </div>
                    ))}

                    {articleContent.map((item) => (
                        <div key={item.id} className="impact-main1">
                            {item.id === "1" && (
                                <div className="our-impact2">

                                    <div className='our-impact-left2'>
                                        <img
                                            src={item.img1} alt={item.title}
                                            className='rounded shadow img-fluid'
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <div className='our-impact-right2'>
                                        <h3>{item.subtitle}</h3>
                                        <span>{socialMediaContent.iconFacebook} {socialMediaContent.iconTwitter}</span>
                                        <p>{item.paragraph1}</p>
                                        <p>{item.paragraph2}</p>
                                        <div className='yellow-btn shadow' style={{ width: "fit-content", padding: "0.8rem 1.5rem" }}>
                                            <NavLink className=""
                                                style={{ textDecoration: "none", color: "#003e54" }}
                                                to='/our-impact/nourishing-live'
                                            >
                                                READ MORE
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {item.id === "2" && (
                                <div className="our-impact2">

                                    <div className='our-impact-left2'>
                                        <img
                                            src={item.img1} alt={item.title}
                                            className='rounded shadow img-fluid'
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <div className='our-impact-right2'>
                                        <h3>{item.title2}</h3>
                                        <span>{socialMediaContent.iconFacebook} {socialMediaContent.iconTwitter}</span>
                                        <p>{item.paragraph1}</p>
                                        <p>{item.paragraph2}</p>
                                        <div className='yellow-btn shadow' style={{ width: "fit-content", padding: "0.8rem 1.5rem" }}>
                                            <NavLink
                                                className=""
                                                style={{ textDecoration: "none", color: "#003e54" }}
                                                to='/our-impact/power-of-education'
                                            >
                                                READ MORE
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {item.id === "3" && (
                                <div className="our-impact2">

                                    <div className='our-impact-left2'>
                                        <img
                                            src={item.img1} alt={item.title}
                                            className='rounded shadow img-fluid'
                                            style={{ width: "500px" }}
                                        />
                                    </div>
                                    <div className='our-impact-right2'>
                                        <h3>{item.subtitle}</h3>
                                        <span>{socialMediaContent.iconFacebook} {socialMediaContent.iconTwitter}</span>
                                        <p>{item.paragraph1}</p>
                                        <p>{item.paragraph2}</p>
                                        <div className='yellow-btn shadow' style={{ width: "fit-content", padding: "0.8rem 1.5rem" }}>
                                            <NavLink
                                                className=""
                                                style={{ textDecoration: "none", color: "#003e54" }}
                                                to='/our-impact/afforestation'
                                            >
                                                READ MORE
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {item.id === "4" && (
                                <div className="our-impact2">

                                    <div className='our-impact-left2'>
                                        <img
                                            src={item.img1} alt={item.title}
                                            className='rounded shadow img-fluid'
                                            style={{ width: "800px" }}
                                        />
                                    </div>
                                    <div className='our-impact-right2'>
                                        <h3>{item.title2}</h3>
                                        <span>{socialMediaContent.iconFacebook} {socialMediaContent.iconTwitter}</span>
                                        <p>{item.paragraph1}</p>
                                        <p>{item.paragraph2}</p>
                                        <div className='yellow-btn shadow' style={{ width: "fit-content", padding: "0.8rem 1.5rem" }}>
                                            <NavLink
                                                className=""
                                                style={{ textDecoration: "none", color: "#003e54" }}
                                                to='/our-impact/empowering-change'
                                            >
                                                READ MORE
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default Impact