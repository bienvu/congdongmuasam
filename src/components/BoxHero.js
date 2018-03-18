import React, { Component } from 'react';
import bgImage from '../images/sale.jpg';
class BoxHero extends Component {
  render() {
    return(
      <div className="box-hero  height-small">
        <div className="box-hero__bg-image" style={{backgroundImage: "url(" + bgImage + ")"}}></div>
        <div className="container">
          <div className="box-hero__content">
            <h2 className="box-hero__title">Chào Mừng bạn đến với Cộng đồng mua sắm</h2>
            <div className="box-hero__body">Chúng tôi chuyên cung cấp các thông tin khuyến mãi và mã giảm giá một cách nhanh nhất đến người mua sam!</div>
          </div>
        </div>
        <div className="box-hero__link"><i className="icon-down js-scroll-next"></i></div>
      </div>
    );
  }
}

export default BoxHero;
