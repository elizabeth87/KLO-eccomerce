import React, { Component } from 'react';
import '../About.css'

class About extends Component {
    render() {
        return (
            <div className="about-section">
                <div className="inner-container">
                    <h2>Let's stay connected!</h2>
                <div className="">
                <a href="https://instagram.com/adri_bautista_s?igshid=hwmgagx62kzf" className="mr-2 instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://instagram.com/adri_bautista_s?igshid=hwmgagx62kzf" className="mr-2 youtube"><i class="fab fa-youtube"></i></a>
                </div>
                <div className="contact-text">
                    <p>Order will be ready 24 hours after order has been placed. Pick up is in Modesto.</p><br />
                    <p>If you have any questions please call or text at (209)324-3446</p>
                </div>
            </div>
            
            <div className='img'>
            </div>
            </div>
        )
    }
}

export default About;


