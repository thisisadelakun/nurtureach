import React from 'react'
import './Privacy.css'
import { privacyContent } from '../../db/db2'
import Dislclaimer from '../disclaimer/Dislclaimer'

const Privacy = () => {
    return (
        <div className='privacy'>
            {privacyContent.map((item) => (
                <div key={item.id} className="privacy-header">
                    {item.id === "0" && (
                        <div>
                            <div className="privacy-header-img"></div>
                            <div className="privacy-header-txt container">
                                <h1>{item.title}</h1>
                            </div>
                        </div>
                    )}
                </div>
            ))}

            {privacyContent.map((item) => (
                <div key={item.id} className="privacy-main container">
                    {item.id === "1" && (
                        <div className="privacy-policy">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.content}</p>
                        </div>
                    )}

                    {item.id === "2" && (
                        <div className="privacy-policy">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "3" && (
                        <div className="privacy-policy">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "4" && (
                        <div className="privacy-policy">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "5" && (
                        <div className="privacy-policy">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.content}</p>
                        </div>
                    )}
                    {item.id === "6" && (
                        <div className="privacy-policy">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.content}</p>
                        </div>
                    )}

                    {item.id === "7" && (
                        <div className="privacy-policy">
                            <h3>
                                {item.title}
                            </h3>
                            <p>{item.subtitle}</p>
                            <ol>
                                <li className='terms-list'>{item.content1}</li>
                                <li className='terms-list'>{item.content2}</li>
                                <li className='terms-list'>{item.content3}</li>
                                <li className='terms-list'>{item.content4}</li>
                                <li className='terms-list'>{item.content5}</li>
                            </ol>
                        </div>
                    )}

                    {item.id === "8" && (
                        <div className="privacy-policy">
                            <p>{item.content}</p>
                        </div>
                    )}

                </div>

            ))}

            <div className="disclaimer">
                <Dislclaimer/>
            </div>
        </div>
    )
}

export default Privacy