import React from 'react'
import './Home.css'
import {
  companyInfo,
  missionContent,
  articleContent,
  whatWeDoContent,
  impactContent,
  commentContent
} from '../../db/db'

import {
  applyContent
} from '../../db/db2';

// Import Link from scroll
import { Link } from 'react-scroll';

import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-col'>
      <div className="homeheaders" >
        <h1>
          {companyInfo.motto}
        </h1>

        <div className="yellow-btn abt-btn">
          <NavLink className="abt-btn-link" style={{ textDecoration: "none" }} to='/about-us'>
            ABOUT US
          </NavLink>
        </div>
        <div className="learn_more">
          <Link
            style={{ fontSize: "20px" }}
            activeClass="active"
            to="homeheaders-text-col"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
          >
            Explore More <br />
            {companyInfo.icon} <br />
          </Link>

        </div>

        <div className="homeheaders-text">
          <div className='homeheaders-text-col' id='homeheaders-text-col'>
            <div>
              <h2>{missionContent.title}</h2>
              <p>{missionContent.content}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="homemain">
        {articleContent.map((item) => (
          <div key={`homemain-${item.id}`} className="homemain-col">
            {item.id === "1" && (
              <div className="homemain-col1">
                <div className="homemain-col1-img">
                  <img src={item.img1} alt="" className='img-fluid' />
                </div>
                <div className="homemain-col1-text">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph1}</p>
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
              <div className="homemain-col2">
                <div className="homemain-col2-img">
                  <img src={item.img2} alt="" className='img-fluid' />
                </div>
                <div className="homemain-col2-text">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph1}</p>
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
              <div className="homemain-col1">
                <div className="homemain-col1-img">
                  <img src={item.img1} alt="" className='img-fluid' />
                </div>
                <div className="homemain-col1-text">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph1}</p>
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
              <div className="homemain-col2">
                <div className="homemain-col2-img">
                  <img src={item.img1} alt="" className='img-fluid' />
                </div>
                <div className="homemain-col2-text">
                  <h3>{item.title}</h3>
                  <p>{item.paragraph1}</p>
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

      <article className='artilce'>

        {/******************* What we do *******************/}

        <div className='artilce-h1'>
          <h1>What we do</h1>
        </div>

        <div className="homearticle">
          {whatWeDoContent.map((item) => (
            <div key={`homearticle-${item.id}`} className="homearticle-col">
              {item.id === "1" && (
                <div className="homearticle-col1">
                  <NavLink to="/our-impact">
                    <img src={item.img} alt={item.title} className='img-fluid' />
                    <div className="image-overlay">
                      <span className="text-overlay">
                        {item.title}
                      </span>
                    </div>
                  </NavLink>
                </div>
              )}

              {item.id === "2" && (
                <div className="homearticle-col2">
                  <NavLink to="/our-impact">
                    <img src={item.img} alt={item.title} className='img-fluid' />
                    <div className="image-overlay">
                      <span className="text-overlay">
                        {item.title}
                      </span>
                    </div>
                  </NavLink>
                </div>
              )}

              {item.id === "3" && (
                <div className="homearticle-col3">
                  <NavLink to="/our-impact">
                    <img src={item.img} alt={item.title} className='img-fluid' />
                    <div className="image-overlay">
                      <span className="text-overlay">
                        {item.title}
                      </span>
                    </div>
                  </NavLink>
                </div>
              )}

              {item.id === "4" && (
                <div className="homearticle-col4">
                  <NavLink to="/our-impact">
                    <img src={item.img} alt={item.title} className='img-fluid' />
                    <div className="image-overlay">
                      <span className="text-overlay">
                        {item.title}
                      </span>
                    </div>
                  </NavLink>
                </div>
              )}

            </div>
          ))}
        </div>

        {/******************* Apply now *******************/}

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
                      style={{ color: "rgb(255, 203, 112)", fontStyle: "italic", fontWeight: "700", marginRight: "5px" }}
                    >
                      Apply now
                    </NavLink> {item.content2}
                  </p>
                </div>
              )}

            </div>
          ))}
        </div>

        {/******************* Impact *******************/}

        <div className='homearticle3'>
          <div className="impactReached">
            {impactContent.map((item) => (
              <div key={`homearticle3-${item.id}`} className="impactReached-col">
                {item.id === "1" && (
                  <div className="iR-col1">
                    <h1 className='ir-h1'>{item.title}</h1>
                    <span className='ir-span'>{item.subtitle}</span>
                    <p className='ir-p'>{item.content}</p>
                    <p></p>
                  </div>
                )}
                {item.id === "2" && (
                  <div className="iR-col2">
                    <h1 className='ir-h1'>{item.title}</h1>
                    <span className='ir-span'>{item.subtitle}</span>
                    <p className='ir-p'>{item.content}</p>
                  </div>
                )}

                {item.id === "3" && (
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
            <div key={`pagecomment-${item.id}`} className="page-comment-container">
              {item.id === "1" && (
                <div className='page-comment-col'>
                  <div className="comment-img">
                    <img src={item.img1} alt={item.name} className='img-fluid' />
                  </div>
                  <div className="comment-text home-comment-text">
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
      </article>

    </div >
  )
}

export default Home