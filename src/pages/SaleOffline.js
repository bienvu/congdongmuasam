import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BoxHero from '../components/BoxHero';
import SaleOfflineList from '../components/SaleOfflineList';
import Data from '../data';

function CategorySaleOffline() {
  return (
    <div className="container">
      <ul className="category">
        <li>
          <Link to="/khuyen-mai-offline/dien-tu">Điện tử</Link>
        </li>
        <li>
          <Link to="/khuyen-mai-offline/gia-dung">Gia dụng</Link>
        </li>
        <li><Link to="/khuyen-mai-offline/an-uong">Ăn Uống</Link></li>
        <li><Link to="/khuyen-mai-offline/thoi-trang">Thời trang</Link></li>
      </ul>
    </div>
  );
}

class SaleOffline extends Component {
  render() {
    return(
      <div>
        <BoxHero />
        <CategorySaleOffline />
        <SaleOfflineList data={Data.saleOffline}/>
      </div>
    );
  }
}

export default SaleOffline;
