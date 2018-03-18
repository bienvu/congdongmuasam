import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return(
      <footer className="footer">
        <div className="container">
          <div className="footer-menu">
            <ul>
              <li>© 2018 Congdongmuasam.com</li>
              <li><Link to="/intro">Giới thiệu</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/privacy">Điều khoản</Link></li>
              <li><Link to="/privacy">Chính sách bảo mật</Link></li>
              <li><Link to="/contact">Liên hệ</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
