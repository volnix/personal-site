import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import { Icon } from "@iconify/react";


export default class Skills extends Component {

  render() {
      return <section id="skills">
      <Col md={12} className='center'>
            <h2 id="skills-heading">
              TECHNICAL SKILLS
            </h2>
            <ul className='list-inline mx-auto'>
              {
                ['amazonaws','nodedotjs', 'php', 'javascript', 'python', 'react', 'mysql', 'csswizardry', 'bootstrap', 'sass'].map(icon => {
                  return <li className='list-inline-item mx-3' key={icon}>
                    <div className='tile'>
                      <Icon
                        icon={`simple-icons:${icon}`}
                        style={{ fontSize: "300%", color: 'whitesmoke' }}
                      />
                      </div>
                    </li>
                })
              }
            </ul>
      </Col>
    </section>
  }
}