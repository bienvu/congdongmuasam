import React, { Component } from 'react';
import { Link } from "react-router-dom";
import adayroi from '../images/adayroi.png';
import tiki from '../images/tiki.png';
import lazada from '../images/lazada.jpg';
import firebase from '../firebase.js';

class ListBrand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.data.title,
      description: props.data.description,
      listBrand: props.data.listBrand
    }
  }

  render() {
    return(
      <div className="list-brand">
        <div className="container">
          <h2 className="section-title">{this.state.title}</h2>
          <div className="section-description">{this.state.description}</div>
          <div className="list-brand__wrap">
            {this.state.listBrand.map((item, index) => {
              return(
                <div className="list-brand__item" key={index}>
                  <div className="list-brand__image"><a href=""><img src={item.image} alt={item.title} width="160" height="160" /></a></div>
                  <h4 className="list-brand__title"><a href="">{item.title}</a></h4>
                  <div className="list-brand__description"><a href="">{item.description}</a></div>
                  <Link to={"/khuyen-mai-online/"+item.type}>{item.type}</Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListBrand;
