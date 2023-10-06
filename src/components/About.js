import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Icon } from "@iconify/react";
import awsIcon from "@iconify/icons-logos/aws";
import pythonIcon from "@iconify/icons-logos/python";
import javascriptIcon from "@iconify/icons-logos/javascript";
import circleIcon from "@iconify-icons/map/circle";


export default class About extends Component {

  render() {
      return <section id="about">
      <Col md={12}>
        <Row>
          <Col xs={12} className='center'>
            <h2 id="about-heading">
              ABOUT ME
            </h2>
          </Col>
        </Row>
        <Row className="center mx-auto mb-5">
          <Col className="mb-5 center" md={4}>
            <div className="polaroid">
              <span style={{ cursor: "auto" }}>
                <img
                  height="400px"
                  src="Headshot.JPG"
                  alt="Avatar placeholder"
                />
                <Icon
                  icon={awsIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={pythonIcon}
                  style={{ fontSize: "300%", margin: "9% 5% 0 5%" }}
                />
                <Icon
                  icon={javascriptIcon}
                  style={{ fontSize: "350%", margin: "9% 5% 0 5%" }}
                />
              </span>
            </div>
          </Col>

          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header" style={{ textAlign: 'left' }}>
                  <Icon
                    icon={circleIcon}
                    style={{ fontSize: "70%", color: 'rgb(237, 76, 92)'}}
                  />{" "}
                  &nbsp;{" "}
                  <Icon
                    icon={circleIcon}
                    style={{ fontSize: "70%", color: 'rgb(253, 203, 88)'}}
                  />{" "}
                  &nbsp;{" "}
                  <Icon
                    icon={circleIcon}
                    style={{ fontSize: "70%", color: 'rgb(120, 177, 89)'}}
                  />
                </div>
                <div
                  className="card-body text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <span className="hi">Great to meet you!</span>
                  <br />
                  <br />
                  <p id="about-text">
                  My name is Nick Volgas and I've been leading technical teams since 2016.  
                  I also maintain a deep interest in anything to do with technology - from IoT to front-end dev - and keep my development skills sharp by engaging these interests in my free time.  
                  Outside of work I'm a busy father of two little girls, a <a href="https://running.nickvolgas.com">runner</a> (mostly on trails), <a href="https://records.nickvolgas.com">vinyl collector</a>, and home automation tinkerer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Col>
    </section>
  }
}