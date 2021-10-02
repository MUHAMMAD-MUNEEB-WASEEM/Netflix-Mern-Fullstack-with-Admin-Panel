import React from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import TopBar from  './components/TopBar/TopBar'
import './App.css'
import Home from './pages/Home/Home';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import UserList from './pages/UserList/UserList';
import UserPage from './pages/UserPage/UserPage';
import NewUser from './pages/NewUser/NewUser';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import NewProduct from './pages/NewProduct/NewProduct';


function App() {
  return (

    <Router>

        <TopBar/>

        <div className="container">
          <Sidebar/> 

          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/users">
              <UserList/>
            </Route>

            <Route path="/user/:userId">
              <UserPage/>
            </Route>

            <Route path="/newUser">
              <NewUser/>
            </Route>

            <Route path="/products">
              <ProductList/>
            </Route>

            <Route path="/product/:productId">
              <Product/>
            </Route>

            <Route path="/newproduct">
              <NewProduct/>
            </Route>

          </Switch>
        </div>
        </Router>
  );
}

export default App;
