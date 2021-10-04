import React, { useState, useEffect, useMemo } from 'react'
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
import axios from 'axios';
import LoginPage from './pages/login/LoginPage';
import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom'
import ListList from './pages/listList/ListList';
import List from './pages/list/List'

function App() {
  const user = useSelector(state=>state.user.user)

  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(user))//user is not name of store, it the name of key inside state
  }, [user])


  return (

    <Router>
      <Switch>

       <Route path="/login">
         {!user ? <LoginPage /> : <Redirect to="/"/>}
         
         </Route>

         {user && (
          <>
        
        <TopBar/>

        <div className="container">
          <Sidebar/> 

            <Route exact path="/">
              {user ? <Home/> : <Redirect to="/login"/>}
            </Route>

            <Route exact path="/login">
              <LoginPage/>
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

            <Route path="/movies">
              <ProductList/>
            </Route>

            <Route path="/product/:productId">
              <Product/>
            </Route>

            <Route path="/newproduct">
              <NewProduct/>
            </Route>

            <Route path="/lists">
              <ListList/>
            </Route>

            <Route path="/list/:listId">
              <List/>
            </Route>

            <Route path="/newlist">
              <NewProduct/>
            </Route>
        </div>
        </>
         )}
        </Switch>
      </Router>
  );
}

export default App;
