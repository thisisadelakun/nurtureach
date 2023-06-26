import React from 'react'
import './Covid19.css'
import { covidContent } from '../../db/db2'
import { impactContent, commentContent } from '../../db/db'

const Covid19 = () => {
  return (
    <div className='covid'>
      {covidContent.map((item) => (
        <div key={item.id} className="covid-header">
          {item.id === "0" && (
            <div>
              <div className="covid-header-img"></div>
              <div className="covid-header-txt container">
                <h1>{item.title}</h1>
              </div>
            </div>
          )}
        </div>
      ))}

      {covidContent.map((item) => (
        <div key={item.id} className="covid-main-title container">
          {item.id === "0" && (
            <div>
              <h3>{item.subtitle}</h3>
            </div>
          )}
        </div>
      ))}

      {covidContent.map((item) => (
        <div key={item.id} className="covid-main container">
          {item.id === "1" && (
            <div className="about-us">
              <p>{item.content}</p>
            </div>
          )}

          {item.id === "2" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}

          {item.id === "3" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}

          {item.id === "4" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}
          {item.id === "5" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}
          {item.id === "6" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}
          {item.id === "7" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}
          {item.id === "8" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}
          {item.id === "9" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}
          {item.id === "10" && (
            <div className="covid-19">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}

      <div className='covid-article'>
        <div className="impactReached">
          {impactContent.map((item) => (
            <div key={item.id} className="impactReached-col">
              {item.id === "7" && (
                <div className="iR-col1">
                  <h1 className='ir-h1'>{item.title}</h1>
                  <span className='ir-span'>{item.subtitle}</span>
                  <p className='ir-p'>{item.content}</p>
                  <p></p>
                </div>
              )}
              {item.id === "8" && (
                <div className="iR-col2">
                  <h1 className='ir-h1'>{item.title}</h1>
                  <span className='ir-span'>{item.subtitle}</span>
                  <p className='ir-p'>{item.content}</p>
                </div>
              )}

              {item.id === "9" && (
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
            {item.id === "3" && (
              <div className='page-comment-col'>
                <div className="comment-img">
                  <img src={item.img1} alt={item.name} className='img-fluid' />
                </div>
                <div className="comment-text covid-comment-text">
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

export default Covid19