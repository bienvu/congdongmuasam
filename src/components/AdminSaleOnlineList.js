import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from '../firebase.js';
import adayroi from '../images/adayroi.png';
import tiki from '../images/tiki.png';
import lazada from '../images/lazada.jpg';

class AdminSaleOnlineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saleItem: props.data
    }

    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('saleOnline');
    itemsRef.on('value', (snapshot) => {
      let saleOnlineData = snapshot.val();
      console.log(saleOnlineData);
      let newState = [];
      for (let item in saleOnlineData) {
        newState.push({
          id: item,
          title: saleOnlineData[item].title,
          image:  saleOnlineData[item].image,
          code: saleOnlineData[item].code,
          type: saleOnlineData[item].type,
          sale: saleOnlineData[item].sale
        });
      }
      this.setState({
        saleItem: newState
      });
    });
  }

  handleDeleteItem(id) {
    const itemRef = firebase.database().ref(`/saleOnline/${id}`);
    itemRef.remove();
  }

  handleUpdateItem(id) {

  }

  render() {
    return(
      <div className="list-discount">
        <div className="container">
          <div className="list-discount__wrap">
            {this.state.saleItem.map((item, index) => {
              let code= '';
              let logo= '';
              if(item.code != "") {
                code = <div className="list-discount__code">Mã Giảm giá: <span>{item.code}</span></div>;
              }

              if(item.type == "adayroi") {
                logo = <div className="list-discount__type"><Link to={"/khuyen-mai-online/" + item.type} ><img src={adayroi} alt={item.type} width="70" height="70" /></Link></div>;
              } else if(item.type == "tiki") {
                logo = <div className="list-discount__type"><Link to={"/khuyen-mai-online/" + item.type} ><img src={tiki} alt={item.type} width="70" height="70" /></Link></div>;
              } else {
                logo = <div className="list-discount__type"><Link to={"/khuyen-mai-online/" + item.type} ><img src={lazada} alt={item.type} width="70" height="70" /></Link></div>;
              }

              return (
                <div className="list-discount__item" key={index}>
                  <div className="list-discount__top">
                    {logo}
                    <div className="list-discount__content">
                      <h4 className="list-discount__title"><a href="{item.link}" target="_blank">{item.title}</a></h4>
                      <div className="list-discount__date"><i className="icon-time"></i>Thời Gian: {item.time}</div>
                    </div>
                  </div>
                  <div className="list-discount__bottom">
                    <div className="list-discount__info">
                      {code}
                      <div className="list-discount__sale">{item.sale}</div>
                    </div>
                    <div className="list-discount__link"><a href="{item.link}" target="_blank">Xem ngay</a></div>
                  </div>
                  <div clasName="action">
                    <span onClick={() => this.handleDeleteItem(item.id)}>Update</span>
                    <span onClick={() => this.handleDeleteItem(item.id)}>Delete</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default AdminSaleOnlineList;
