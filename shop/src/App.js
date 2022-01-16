/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown, Jumbotron, Button, Container } from "react-bootstrap";
import Data from './data';
import Detail from './Detail';
 
import { Link, Route, Switch} from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>

      
    <Switch>
      <Route exact path="/">
        <Jumbotron className="background">
          <h1>20% Season Off</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        
        <div className='container'>
          <div className='row'>
            {
              shoes.map((a, i) => {
                return <Card shoes={a} i={i}/>
              })
            }    
          </div>
        </div>
      </Route>

      <Route exact path="/detail/:id">
          <Detail shoes={shoes}/>
      </Route>

      <Route path="/:id">
        <div>아무거나 적었을 떄 이거 보여주셈</div>
        </Route>
        
    </Switch>
    </div>
  );
}


function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' +  (props.i+1) +'.jpg'} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}원</p>
    </div>
  )
}

export default App;
