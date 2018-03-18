import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from '../firebase.js';

class SaleOfflineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saleItem: props.data
    }
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('saleOffline');
    itemsRef.on('value', (snapshot) => {
      let saleOfflineData = snapshot.val();
      this.setState({
        saleItem: saleOfflineData
      });
    });
  }

  render() {
    return(
      <div className="box-discount">
        <div className="container">
          <div className="box-discount__wrap">
            {this.state.saleItem.map((item, index) => {
              return(
                <div className="box-discount__item" key={index}>
                  <div className="box-discount__top">
                    <div className="box-discount__type"><a href="#"><image src={item.shopLogo} alt="FFW image" width="70" height="70" /></a></div>
                    <div className="box-discount__date"><i className="icon-time"></i>{item.time}</div>
                  </div>
                  <div className="box-discount__content">
                    <div className="box-discount__image"><img src={item.image} alt="FFW image" width="400" height="250"/> </div>
                    <div className="box-discount__sale">{item.sale}</div>
                    <div className="box-discount__link"><Link to={item.link} target="_blank">Xem ngay</Link></div>
                    <div className="box-discount__info">{item.info}</div>
                  </div>
                  <h4 className="box-discount__title"><Link to={item.link} target="_blank">{item.title}</Link></h4>

                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SaleOfflineList;
