import React, { Component } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typical from "react-typical";

export default class Header extends Component {

  titles = ['technologist', 'runner', 'it leader', 'father']

  render() {
    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat()} loop={50} />
    }, (props, prevProp) => true);

      return <Container style={{ height: window.innerHeight - 50 }} id='hero'>
          <Row>
            <Col id="hero-inner">
              <h1>Nick Volgas</h1>
              <HeaderTitleTypeAnimation/>
            </Col>
          </Row>
      </Container>
  }
}