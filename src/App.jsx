import React, { Component } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Menu from "./pages/menuPage/MenuPage";
import { mealsApi } from "./components/api/mealsApi";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      cart: {},
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = async () => {
    const products = await mealsApi.getMeals();
    this.setState({ productList: products });
  };

  addToCart = (product) => {
    this.setState(({ cart }) => ({
      cart: {
        ...cart,
        [product.id]: { 
          ...product,
          quantity: (cart[product.id]?.quantity || 0) + (product.quantity || 1),
        },
      },
    }));
  };

  componentDidUpdate(prevState) {
    if (prevState.cart !== this.state.cart) {
      console.log("Updated Cart:", this.state.cart); // TODO: Only for debugging, remove later
    }
  }

  render() {
    const { productList, cart } = this.state;

    return (
      <>
        <Header cart={cart} />
        <Menu productList={productList} addToCart={this.addToCart} />
        <Footer />
      </>
    );
  }
}

export default App;
