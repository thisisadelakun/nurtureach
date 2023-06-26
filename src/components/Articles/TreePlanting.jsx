import React from 'react'
import './Note.css'
import { articleContent, impactContent, commentContent } from '../../db/db'

const TreePlanting = () => {
  return (
    <div className='note'>
      {articleContent.map((item) => (
        <div key={item.id} className="note-header">
          {item.id === "3" && (
            <div>
              <div className="note3-header-img"></div>
              <div className="note3-header-txt container shadow">
                <h1>{item.title}</h1>
              </div>
            </div>
          )}
        </div>
      ))}

      {articleContent.map((item) => (
        <div key={item.id} className="note-main-title container">
          {item.id === "3" && (
            <div>
              <h3>{item.title2}</h3>
            </div>
          )}
        </div>
      ))}

      {articleContent.map((item) => (
        <div key={item.id} className="note-main container">
          {item.id === "3" && (
            <div className="note-pg">
              <p>{item.paragraph1}</p>
            </div>
          )}

          {item.id === "3" && (
            <div className="note-pg">
              <p>{item.paragraph2}</p>
            </div>
          )}

          {item.id === "3" && (
            <div className="note-pgH">
              <h4>{item.subtitle}</h4>
            </div>
          )}

          {item.id === "3" && (
            <div className="note-pg">
              <p>{item.paragraph3}</p>
            </div>
          )}

          {item.id === "3" && (
            <div className="note-pg">
              <p>{item.paragraph4}</p>
            </div>
          )}

          <div className="note-pg-row">
            <div className='note-pg-row-left'>
              {item.id === "3" && (
                <div className="note-pg">
                  <p>{item.paragraph5}</p>
                </div>
              )}

              {item.id === "3" && (
                <div className="note-pg">
                  <p>{item.paragraph6}</p>
                </div>
              )}
            </div>
            {item.id === "3" && (
              <div className="note-img" style={{ overflowX: "hidden" }}>
                <div className='note-image-row' style={{ display: "flex", flexDirection: "row", overflowX: "hidden" }}>
                  <img src={item.img3} alt={item.title} className='image-fluid' width={250} />
                  <img src={item.img1} alt={item.title} className='image-fluid' width={250} />
                </div>
                <img src={item.img2} alt={item.title} className='image-fluid' width={500} />
              </div>
            )}
          </div>

          {item.id === "3" && (
            <div className="note-pg">
              <span>{item.quote}</span>
            </div>
          )}

          {item.id === "3" && (
            <div className="note-pg">
              <p>{item.paragraph7}</p>
            </div>
          )}


        </div>
      ))}

      <div className='note-article' style={{ background: "seagreen", color: "#fff" }}>
        <div className="impactReached">
          {impactContent.map((item) => (
            <div key={item.id} className="impactReached-col" >
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
            {item.id === "4" && (
              <div className='page-comment-col'>
                <div className="comment-img">
                  <img src={item.img1} alt={item.name} className='img-fluid' />
                </div>
                <div className="comment-text note-comment-text">
                  <p style={{ borderColor: "seagreen", color: "seagreen" }}>
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

export default TreePlanting