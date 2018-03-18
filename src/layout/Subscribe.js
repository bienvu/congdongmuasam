import React, { Component } from 'react';
import logo from '../logo.png';

class Subscribe extends Component {
  render() {
    return(
      <div id="mc_embed_signup" className="box-subscribe">
        <div className="container">
          <div className="info">
            <h3>Cộng Đồng Mua Sắm</h3>
            <div>Cộng Đồng Mua Sắm là nơi tổng hợp tin khuyến mãi Online và offline ở Việt Nam, cho phép bạn tìm kiếm mã giảm giá, tin ưu đãi từ đa dạng lĩnh vực thời trang, nhà hàng, làm đẹp và web mua sắm.</div>
          </div>
          <form action="https://docksal.us17.list-manage.com/subscribe/post?u=e2517e0308ccc3804596148f3&amp;id=609229d778" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
            <div id="mc_embed_signup_scroll">
            	<label htmlFor="mce-EMAIL">Đăng ký nhận khuyến mãi</label>
            	<input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
              <div className="clear"><input type="submit" value="Đăng ký" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Subscribe;
