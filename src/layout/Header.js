import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="container">
          <div className="header__wrap">
            <div className="header__logo">
              <div className="header__logo__wrap"><Link to="/"><img src={logo} with='300' height='31' alt='Logo' /></Link>
                <div className="menu-responsive-icon"> <span className="menu-icon"><i></i><i></i><i></i></span> </div>
              </div>
            </div>
            <div className="header__menu">
              <div className="navigation-menu">
                <div className="main-menu js-expanded-menu">
                  <ul className="menu nav">
                    <li className="expanded-menu"><Link to="/khuyen-mai-online">Khuyến mãi Online</Link></li>
                    <li> <Link to="/khuyen-mai-offline">Khuyến mãi Offline</Link></li>
                    <li><Link to="/tin-tuc">Tin Tức</Link></li>
                    <li><Link to="/reviews">Reviews</Link></li>
                    <li><Link to="/congnghe">Công Nghệ</Link></li>
                    <li><Link to="/download">Download</Link></li>
                    <li><Link to="https://www.facebook.com/congdongmuasamvietnam" target="_blank"><span className="icon-facebook social"></span></Link></li>
                    <li><Link to="https://www.facebook.com/groups/336706910161611" target="_blank"><span className="icon-group social"></span></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
