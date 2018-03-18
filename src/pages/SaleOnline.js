import React, { Component } from "react";
import BoxHero from '../components/BoxHero';
import SaleOnlineList from '../components/SaleOnlineList';
import { Link } from "react-router-dom";
import Data from '../data';

function CategorySaleOnline() {
  return (
    <div className="container">
      <ul className="category">
        <li>
          <Link to="/khuyen-mai-online/adayroi">adayroi</Link>
        </li>
        <li>
          <Link to="/khuyen-mai-online/tiki">tiki</Link>
        </li>
        <li>
          <Link to="/khuyen-mai-online/lazada">lazada</Link>
        </li>
      </ul>
    </div>
  );
}

class SaleOnline extends Component {
  render() {
    return(
      <div>
        <BoxHero />
        <CategorySaleOnline />
        <SaleOnlineList data={Data.saleOnline} />
      </div>
    );
  }
}

export default SaleOnline;
