import React, { Component } from 'react';
import './InteractiveResume.css';
import './Responsive.css';

class InteractiveResume extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className = "resume">
        <div className = 'resumeSectionHeader'>
          <h1>Interactive Resume</h1>
        </div>
        <div className = "resumeCardList">
          <p className="sectionTitle">Work Experience</p>
          {props.workItems.map( item =>
            <div className = 'resumeCard'>
              <div className='cardIcon'><img className='cardImage' src = {item.image}></img></div>
              <div className = 'cardInfo'>
                <p className='cardCompany'>{item.company}</p>
                <p className='cardTitle'>{item.title}</p>
                <ul>
                {item.description.map( point =>
                  <li className='cardDescription'>{point}</li>
                )}
                </ul>
                <p className = 'skillsTitle'>Relevant Skills</p>
                <div className = "subItems">
                  <br/>
                {item.subItems.map( subItem =>
                  <div className='subItemCardOuter'>
                    <div className = 'subItemCard' style={{ border: "3px solid " + subItem.borderColor}}>
                      <div className = 'subItemImageContainer'>
                        <img className = 'subItemImage' src = {subItem.image}></img>
                      <div className='subItemTitle'>{subItem.title}</div></div>
                      <div className = 'subItemDescription'>
                        <ul>
                        {subItem.description.map( point =>
                          <li>{point}</li>
                        )}
                        </ul>
                      </div>
                    </div>
                  </div>
                  )}
                  </div>
                  </div>
                </div>
                )}
              </div>
          </div>
          )}
}

export default InteractiveResume
