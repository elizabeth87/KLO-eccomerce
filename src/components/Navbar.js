import React, { Component } from 'react';
import '../Navbar.css'
import { ButtonContainer } from './Button'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    state={
        isOpen:false
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    closeNavbar = ()=>{
        this.setState({
            isOpen: false
        })
    } 

    render() {
        return(
            <nav>
             <div className="mainHeader">
               <div className="logo">
                KLO
               </div>
             <div className='btn-bar' onClick={this.handleClick}>
                 <div className="bar"></div>
                 <div className="bar"></div>
                 <div className="bar"></div>
             </div> 
             </div>
             <div className="nav-menu">
            <ul className={this.state.isOpen ? 'showNav' : 'undefined'} nav-menu>
              <li><Link to="/" onClick={this.closeNavbar}>Home</Link></li>
              <li><Link to="/about" onClick={this.closeNavbar}>About</Link></li>
              <li><Link to="/productList" onClick={this.closeNavbar}>Pastries</Link></li>
              <li><Link to="/contact" onClick={this.closeNavbar}>Contact</Link></li>
              <li><Link to="/cart" className="ml-auto">      
               <ButtonContainer>
                 <span className="mr-2">
                   <i className="fas fa-cart-plus"> my cart</i>                   
                 </span>
               </ButtonContainer>
            </Link>
           </li>
           </ul>
           </div>

          </nav>  
          
        )
    }
}


export default Navbar;