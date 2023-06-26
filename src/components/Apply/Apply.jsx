import React from 'react'
import './Apply.css'
import { applyContent } from '../../db/db2'
import { Link } from 'react-router-dom'

import { HiClipboardDocumentCheck } from 'react-icons/hi2'

const Apply = () => {
    return (
        <div className='apply'>
            {applyContent.map((item) => (
                <div key={item.id} className="apply-header">
                    {item.id === "0" && (
                        <div>
                            <div className="apply-header-img"></div>
                            <div className="apply-header-txt container">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {applyContent.map((item) => (
                <div key={item.id} className="apply-main-title container">
                    {item.id === "0" && (
                        <div>
                            <h3>{item.subtitle}</h3>
                        </div>
                    )}
                </div>
            ))}

            {applyContent.map((item) => (
                <div key={item.id} className="apply-main container">
                    {item.id === "1" && (
                        <div className="about-us">
                            <p>{item.content}</p>
                        </div>
                    )}

                    {item.id === "2" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}

                    {item.id === "3" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}

                    {item.id === "4" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "5" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "6" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "7" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "8" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "9" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "10" && (
                        <div className="covid-us">
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            ))}

            <div className='apply-link-col'>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/application-form">
                    <button className='shadow apply-link'>
                        APPLY HERE <HiClipboardDocumentCheck />
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Apply