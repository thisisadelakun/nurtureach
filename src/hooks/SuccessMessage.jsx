import React from 'react'
import { SuccessMessageContent } from '../db/db2';
import Card from 'react-bootstrap/Card';

const SuccessMessage = () => {
  return (
    <div className='success-message'>
      <Card
        className='card'
        style={{
          margin: "auto", textAlign: "center",
          padding: "2rem 1rem", background: "#003e54"
        }}
      >
        <Card.Body>
          <Card.Title
            style={{
              color: "#fff",
              marginBottom: "2rem",
              fontSize:"23px"
            }}
          >
            {SuccessMessageContent.title}
          </Card.Title>
          <Card.Subtitle className="mb-3" style={{color:"mintcream"}}>{SuccessMessageContent.content1}</Card.Subtitle>
          <Card.Text style={{ marginBottom: "2rem", color:"mintcream" }}>
            {SuccessMessageContent.content2}
          </Card.Text>
          <Card.Link
            style={{
              color: "#003e54", fontWeight:"700",
              textDecoration: "none", fontSize:"18px",
              padding: "12px 16px", borderRadius:"12px",
              backgroundColor: "#fff", boxShadow:"0 4px 8px 0 rgba(73, 73, 73, 0.808), 0 6px 20px 0 rgba(126, 218, 255, 0.342)"
            }} href="/"
          >
            {SuccessMessageContent.content3}
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default SuccessMessage