import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './Navbar.css'
import MainPage from '../MainPage/MainPage'
import Favorites from '../Favorites/Favorites'
import Cart from '../Cart/Cart'
import RegisterForm from '../RegisterForm/RegisterForm'
import About from '../About/About'
import Delivery from '../Delivery/Delivery'
import Payment from '../Payment/Payment'




export default function NavBar() {
  
 
  return (
    <Router>
      <div >
        <div className="header-background">
    <div className="wrapper">
      
      <nav>
        <ul className="nav">
        <li className="nav-item-left">
            <Link className="nav-link" to="/about">О нас</Link>
          </li>
          <li className="nav-item-left">
            <Link className="nav-link" to="/delivery">Доставка</Link>
          </li>
          <li className="nav-item-left">
            <Link className="nav-link" to="/payment">Оплата</Link>
          </li>
          <li className="main-item">
            <Link className="nav-link" to="/">MINTY</Link>
          </li>
          <li className="nav-item-right">
            <Link className="nav-link" to="/favorites">Избранное</Link>
          </li>
          <li className="nav-item-right">
            <Link className="nav-link" to="/cart">Корзина</Link>
          </li>
          <li className="nav-item-right">
            <Link className="nav-link" to="/auth">Войти</Link>
          </li>
        </ul>
      </nav>
      </div>
      </div>

     
      <Switch>
      <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/delivery">
          <Delivery />
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
      <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/favorites">
          <Favorites />
        </Route>
        <Route  exact path="/cart">
          <Cart />
        </Route>
        <Route  exact path="/auth">
          <RegisterForm />
        </Route>
        
      </Switch>
   
    </div>
  </Router>
);
}

