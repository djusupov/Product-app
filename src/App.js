
import './App.css'
import React from 'react'
import { product } from './Product'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'
import Basket from './components/Basket/Basket'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './components/Main/Main'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: product,
      basket: []
    }
  }


  componentDidMount() {
    this.setState({
      basket: JSON.parse(localStorage.getItem('cart')) || []
    })
  }

  componentDidUpdate(prevProps, prevState, shapshot) {
    if (prevState.basket !== this.state.basket) {
      localStorage.setItem('cart', JSON.stringify(this.state.basket))
    }
  }

  onAddBasket = (id) => {
    const check = this.state.basket.every(elem => elem.cart.id !== id)
    if (check) {
      this.setState(({ data, basket }) => {
        const index = data.find(elem => elem.id === id);
        const newItem = {
          cart: { ...index }
        }
        const newArr = [...basket, newItem]
        return {
          basket: newArr
        }
      })
    } else {
      alert('Башка тамак жээ ')
    }

  }

  onDeleteItem = (id) => {
    this.setState(({ basket }) => {
      const index = basket.findIndex((elem, index) => elem.id === id);
      const newArr = [...basket.slice(0, index), ...basket.slice(index + 1)];
      console.log(newArr);
      return {
        basket: newArr
      }
    })
  }


  render() {
    const { data, basket } = this.state
    return (
      <>
        <Router>
          <div>
            <Header basket={basket} />
          </div>
          <Switch>
            <Route path="/Главная">
              <Main />
            </Route>
            <Route path="/menu">
              <ProductList data={data} onAddBasket={this.onAddBasket} />
            </Route>
            <Route path="/basket">
              <Basket basket={basket} onDeleteItem={this.onDeleteItem} />
            </Route>
          </Switch>
        </Router>
      </>
        )
  }
}
        export default App