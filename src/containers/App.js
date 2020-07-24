import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Badge} from 'react-bootstrap';
import Products from '../components/Products';
import Cart from '../components/Cart';
function App() {

  return (
      <Container>
          <Row>
              <Col xs={6} md={6} key={1}>
                 <h1>
                    Shopping Cart <Badge variant="danger">New</Badge>
                </h1>
              </Col>
              <Col xs={6} md={6} key={2}>
                  <Cart/>
              </Col>
          </Row>
          <hr/>
          <Products/>
      </Container>

  );
}

export default App;
