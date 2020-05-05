import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import LOGO from "../img/logo8.jpeg";
import { Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
        
    return (
        <header id="header">
          <div class="inner">
               {/* <Container> */}
                    {/* <Navbar collapseOnSelect expand="lg" background-color='#1a1a1a' variant="dark" > */}
            <Navbar collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/#/home">          
                <Link to='/home' class="logo"> 
                <img className="headerlogo" src ={LOGO} alt=""/>  
                HoneyYearS.com 
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/#/home"> 主页</Nav.Link>
                <Nav.Link href="/#/about">关于我们</Nav.Link>
                {/* <Nav.Link href="/#/donation">支持我们</Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
        </header>

        // <header id="header">
        //     <div class="inner">
        //         <Link to='/home' class="logo">
        //             <img className="headerlogo" src ={LOGO} alt="Logo"/>
        //             HoneyYears.com
        //         </Link>
        //         {/* <a href="index.html" class="logo">Honeyyears</a> */}
        //         {/* <nav id="nav navbar navbar-expand-sm bg-light"> */}
        //         <nav id="nav navbar navbar-expand-sm bg-light">
        //             {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        //                 <span class="navbar-toggler-icon"></span>
        //             </button>
        //             <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        
        //             </div> */}
        //             <Link style={navStyle} to='/home'>
        //                 <li>主页</li>
        //             </Link>
        //             <Link style={navStyle} to='/about'>
        //                 <li>关于我们</li>
        //             </Link>
        //             <Link style={navStyle} to='/donation'>
        //                 <li>支持我们</li>
        //             </Link>
                    
                    
        //         </nav>
        //     </div>
		// </header>
    );
}

export default Navigation;