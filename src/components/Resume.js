import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from "@iconify/react";


export default class Resume extends Component {

  render() {
      return <section id="resume">
      <Col md={12} className='center'>
            <h2 id="resume-heading">
              WORK HISTORY
            </h2>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(233, 213, 161)', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid rgb(233, 213, 161)' }}
                date="2022 - present"
                iconStyle={{ background: 'rgb(40, 40, 40)', color: '#fff' }}
                icon={<Icon icon={`simple-icons:amazonaws`} style={{ fontSize: "500%" }}/>}
              >
                <h3 className="vertical-timeline-element-title">Software Development Manager</h3>
                <h4 className="vertical-timeline-element-subtitle">Amazon Web Services</h4>
                <div style={{ fontSize: '.85rem', margin: '1em 0 0', lineHeight: 1.6, fontWeigt: 500 }}>
                  <ul>
                    <li>Lead IoT Core Identity and Console teams.</li>
                    <li>Collaborate with other service teams to deliver customer-obsessed solutions.</li>
                    <li>Track performance of engineers, providing feedback and coaching to help them perform at their best.</li>
                  </ul>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2017 - 2022"
                iconStyle={{ background: 'rgb(40, 40, 40)', color: '#fff' }}
                icon={<Icon icon={`material-symbols:code`} style={{ fontSize: "500%" }}/>}
              >
                <h3 className="vertical-timeline-element-title">Director of Development</h3>
                <h4 className="vertical-timeline-element-subtitle">NIC Division of Tyler Technologies</h4>
                <div style={{ fontSize: '.85rem', margin: '1em 0 0', lineHeight: 1.6, fontWeigt: 500 }}>
                  <ul>
                      <li>Established technical strategy, accounting for overall business goals, budgetary limitations and resource allocation.</li>
                      <li>Led team of 10 developers in analysis and implementation of software from conception through implementation.</li>
                      <li>Spearheaded deployment of websites, APIs and mobile applications.</li>
                    </ul>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2016 - 2017"
                iconStyle={{ background: 'rgb(40, 40, 40)', color: '#fff' }}
                icon={<Icon icon={`material-symbols:memory-outline-rounded`} style={{ fontSize: "500%" }}/>}
              >
                <h3 className="vertical-timeline-element-title">IT Operations Director</h3>
                <h4 className="vertical-timeline-element-subtitle">NIC - Arkansas</h4>
                <p>
                  Managed infrastructure and security operations.
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2014 - 2016"
                iconStyle={{ background: 'rgb(40, 40, 40)', color: '#fff' }}
                icon={<Icon icon={`material-symbols:code`} style={{ fontSize: "500%" }}/>}
              >
                <h3 className="vertical-timeline-element-title">Senior Software Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">NIC - Arkansas</h4>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2011 - 2014"
                iconStyle={{ background: 'rgb(40, 40, 40)', color: '#fff' }}
                icon={<Icon icon={`material-symbols:code`} style={{ fontSize: "500%" }}/>}
              >
                <h3 className="vertical-timeline-element-title">Software Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">NIC - Arkansas</h4>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2007 - 2011"
                iconStyle={{ background: 'rgb(40, 40, 40)', color: '#fff' }}
                icon={<Icon icon={`material-symbols:school-outline`} style={{ fontSize: "500%" }}/>}
              >
                <h3 className="vertical-timeline-element-title">Rhodes College</h3>
                <h4 className="vertical-timeline-element-subtitle">B.S. Computer Science</h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
            
      </Col>
    </section>
  }
}