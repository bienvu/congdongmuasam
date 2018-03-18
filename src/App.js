import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
import Subscribe from './layout/Subscribe';
import Home from './pages/Home';
import News from './pages/News';
import Review from './pages/Review';
import Download from './pages/Download';
import SaleOnline from './pages/SaleOnline';
import SaleOffline from './pages/SaleOffline';
import Addnew from './pages/Addnew';
import "./App.css";
import "./css/styles.css";

const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

const routes = [
  {
    path: "/news",
    component: News
  },
  {
    path: "/review",
    component: Review
  },
  {
    path: "/download",
    component: Download
  },
  {
    path: "/addnew",
    component: Addnew
  },
  {
    path: "/khuyen-mai-offline",
    component: SaleOffline,
    routes: [
      {
        path: "/khuyen-mai-offline/an-uong",
        component: Bus
      },
      {
        path: "/khuyen-mai-offline/thoi-trang",
        component: Cart
      }
    ]
  },
  {
    path: "/khuyen-mai-online",
    component: SaleOnline
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <div className="page">
          <Header />
          <Route exact path='/' component={Home}/>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
          <Subscribe />
          <Footer />
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
