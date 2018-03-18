import React, { Component } from "react";
import BoxHero from '../components/BoxHero';
import ListBrand from '../components/ListBrand';
import Data from '../data';

class Home extends Component {
  render() {
    return(
      <div>
        <BoxHero />
        <ListBrand data={Data.brand} />
      </div>
    );
  }
}

export default Home;
