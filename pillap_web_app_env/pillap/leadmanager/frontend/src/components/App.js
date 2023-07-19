import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Footer from "./layout/Footer"
import Alerts from './layout/Alerts';
import HomePage from "./HomePage";
import AboutUs from "./MainPage/AboutUs";
import HelpCenterLadingPage from "./Helpcenter/HelpCenterLadingPage";
import UserMarketPlace from "./UserPage/UserMarketPlace";
import Dsgvo from './layout/Dsgvo';
import Impressum from './layout/Impressum';


import { Provider } from 'react-redux';
import store from '../store';


import { loadUser } from '../actions/auth';
import Login from './Accounts/Login';
import Register from './Accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import UserProfile from './UserPage/UserProfile';
import ChangeUserProfile from './UserPage/ChangeUserProfile';
import UserCart from './Cart/userCart';
import UserCheckOut from './Cart/userCheckOut';
import { OrderPage } from './Cart/orderPage';
import exchangePlatform from './ExchangePlatform/exchangePlatform';
import configurator from './UserPage/Configurator';
import ProductItems from './ProductPage/product';
import blog from './MainPage/Blog';
import orderSettings from './UserPage/orderSettings';
import wishlist from './UserPage/wishlist';


// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {

    return (
      
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
                <Switch>
                  
                  <Route exact path="/" component={HomePage}/>
                  <Route exact path="/about_us" component={AboutUs} />
                  <Route exact path="/user_marketplace" component={UserMarketPlace}/>
                  <Route exact path="/helpcenter" component={HelpCenterLadingPage} />
                  <Route exact path="/dsgvo" component={Dsgvo} />
                  <Route exact path="/impressum" component={Impressum} />
                  <Route exact path="/cookie_consent" component={Impressum} />

                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} /> 
                  <Route exact path="/blog" component={blog} />
                  <PrivateRoute exact path="/user_profile" component={UserProfile}/>
                  <PrivateRoute exact path="/change_user_profile" component={ChangeUserProfile}/>
                  <PrivateRoute exact path="/configurator" component={configurator}/>
                  <PrivateRoute exact path="/user_cart" component={UserCart}/>
                  <PrivateRoute exact path="/user_check_out" component={UserCheckOut}/>
                  <PrivateRoute exact path="/order_page" component={OrderPage}/>
                  <PrivateRoute exact path="/exchange_platform" component={exchangePlatform}/>
                  <PrivateRoute exact path="/order_settings" component={orderSettings}/>
                  <PrivateRoute exact path="/wishlist" component={wishlist}/> 
                  <Route path="/product/:id" component={ProductItems}/>

                </Switch>
              <Footer />
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
