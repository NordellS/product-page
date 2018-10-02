import React from "react"
import Product from "./Product"
const productsJson = require("./../products.json")

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="productsHeader"><h1>Produkter</h1>
        </div>
          <div className="productsContainer">
            {productsJson.products.map((product) => {
              return<Product name={product.name} price={product.price} type={product.type}
              size={product.size} numberInPack={product.numberInPack} deliveryTime={product.deliveryTime}
              image={product.image} substance={product.substance} />
              })
            }
          </div>
      </div>
    )
  }

}

export default App
