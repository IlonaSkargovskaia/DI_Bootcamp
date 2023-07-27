import React, { Component } from 'react';
import data from '../data.json';

class Example2 extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        
        return ( 
            <div>
                {data.Skills.map((item, index) => (
                    <div key={index}>
                        <p><b>{item.Area}</b></p>
                        {
                            item.SkillSet.map((language, index) => (
                                <ul key={index}>
                                    <li>{language.Name}</li>
                                </ul>
                            ))
                        }
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Example2;