import React, { Component } from 'react';
import image from '../assets/petronect.png';

class Petronect extends Component {
    render() {
        return (
            <div>
                <img className="image" src={image}/>
            </div>
            
        );
    }
}

export default Petronect;