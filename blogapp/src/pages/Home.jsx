import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function App() {
  const [blog, setBlogData] = useState([]);

  const getData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const jsonData = await data.json();
    setBlogData(jsonData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mt-5">
      <Container className="mt-5">
        <h1 className="text-center mt-5">BLOG DASHBOARD</h1>
        <Row className='mt-5'>
        <div className="card-container mt-5">
          {blog.map((item, index) => (
            <Col style={{ width: '18rem'}} key={index} >
              <Card className="mb-3" >
              <Card.Img variant='top' src='holder.js/100px180'/>
              <Card.Body>
                <Card.Title>ID: {item.id}</Card.Title>
                <Card.Text>Title: {item.title}</Card.Text>
              </Card.Body>
            </Card>
            </Col>
          ))}
        </div>
        </Row>
      </Container>
    </div>
  );
}
