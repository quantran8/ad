import Appbar from 'component/Appbar';
import Banner from 'component/Banner';
import Collection from 'component/Collection';
import Detail from 'component/Detail';
import Form from 'component/Form';
import HomePage from 'component/HomePage';
import CartPage from 'features/cart/CartPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <div className="App">
        <Appbar />
        <Switch>
            <Route exact path="/">
                 <Banner />
                 <HomePage />
            </Route>
            <Route  path="/cart">
                 <CartPage />
            </Route>
            <Route  path="/post">
                 <Form />
            </Route>
            <Route exact path="/:slug">
                 <Collection />
            </Route>
            <Route  path="/:slug/:id">
                 <Detail />
            </Route>
           
        </Switch>
    </div>
  );
}

export default App;
