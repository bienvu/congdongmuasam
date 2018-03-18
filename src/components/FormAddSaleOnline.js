import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from '../firebase.js';
import AdminSaleOnlineList from './AdminSaleOnlineList';
import Data from '../data';

class FormAddSaleOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      time: '',
      code: 'HPNY01',
      link: 'https://congdongmuasam.com/',
      sale: '',
      image: '../../../image/adayroi.jpg',
      type: 'adayroi'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAddNewOnline = this.handleAddNewOnline.bind(this);
  }

  componentDidMount() {

  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  updateItem(id) {
    const itemsRef = firebase.database().ref('saleOnline');
    itemsRef.once('value', (snapshot) => {
      let itemData = snapshot.val();
      this.setState({
        title: itemData[id].title,
        time: itemData[id].time,
        code: itemData[id].code,
        link: itemData[id].link,
        sale: itemData[id].sale,
        image: itemData[id].image,
        type: itemData[id].type
      });
    });
  }

  handleAddNewOnline(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('saleOnline');
    const item = {
      title: this.state.title,
      time: this.state.time,
      sale: this.state.sale,
      image: this.state.image,
      code: this.state.code,
      link: this.state.link,
      type: this.state.type
    }
    itemsRef.push(item);
  }

  render() {
    return(
      <div className="container">
        <div className="box-add">
          <h4>Add Sale Online</h4>
          <form onSubmit={this.handleAddNewOnline}>
            <div className="form-item">
              <input name="title" type="text" placeholder="Enter title ..."  onChange={this.handleChange} value={this.state.title} />
            </div>
            <div className="form-item">
              <input name="time" type="text" placeholder="Date"  onChange={this.handleChange} value={this.state.time} />
            </div>
            <div className="form-item">
              <input name="code" type="text" placeholder="Enter code ..."  onChange={this.handleChange} value={this.state.code}/>
            </div>
            <div className="form-item">
              <input name="sale" type="text" placeholder="Enter sale ..."  onChange={this.handleChange} value={this.state.sale}/>
            </div>
            <div className="form-item">
              <input name="image" type="text" placeholder="Enter image ..."  onChange={this.handleChange} value={this.state.image}/>
            </div>
            <div className="form-item">
              <input name="link" type="url" placeholder="Enter Link"  onChange={this.handleChange} value={this.state.link}/>
            </div>
            <div className="form-item" >
              <select onChange={this.handleChange} name="type" value={this.state.type}>
                <option value="adayroi">adayroi</option>
                <option value="tiki">tiki</option>
                <option value="lazada">lazada</option>
                <option value="yes24">yes24</option>
                <option value="fptshop">fptshop</option>
              </select>
            </div>
            <div className="form-item">
              <input id="hidden" type="checkbox" name="hidden" onChange = {this.handleChange} checked={this.state.hidden} />
              <label className="checkbox-lable" htmlFor="hidden">Hidden?:</label>
            </div>
            <div className="form-action">
              <input className="btn btn-blue" type="submit" value="Add Sale Online"/>
            </div>
          </form>
        </div>
        <AdminSaleOnlineList data={Data.saleOnline} />
      </div>
    );
  }
}

export default FormAddSaleOnline;
