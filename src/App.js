import React from 'react';
import game from './game.png';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// import Col from '/react-bootstrap/Col';


function App() {
  return (
    <div className="App">
      <div className="background">
        <Container>
          <Row className="App-header">
            <Col md={4}>
              <img src = {game} alt="" />
            
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
