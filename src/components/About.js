import React, { Component } from 'react';
import '../About.css'

class About extends Component {
    render() {
        return (
            <div class="about-section">
                <div class="inner-container">
                    <h1>The Baker Behind The Sweets</h1>
                    <p class="text">ljalkdjflkdjalkdjlkdjaldkjlkdjkdjalkdjlkdjflkdsjadlkjfdlkjaldkjfldkjalkdjfdlkjaldjalkdjfl;adjlkdjfdlkjfldk;jdl;k </p>
                <div class="skills">
                    <button>BtnHello</button>
                    <span>Baking Made easy</span>
                    <span>Youtube</span>
                    <span>Something</span>
                </div>
                <button>
               <i class="fas fa-cart-plus"></i>                   my cart
               </button>
            </div>
            <img src="./img/baker.jpeg" alt=""></img>
            </div>
        )
    }
}

export default About;