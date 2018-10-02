import React from "react"
import ReactDOM from "react-dom"

class Product extends React.Component {
  render() {
        return (
          <div className="product">
            <h3>{this.props.name.toUpperCase()}</h3>
            <img src={this.props.image} className="productImage" alt="product-image" />
            <div class="productInfo">
              <ul>
                <li>{this.props.type}</li>
                <li>{this.props.substance}</li>
                <li>{this.props.numberInPack}st i förpackningen.</li>
                <li>{this.props.size}</li>
              </ul>
            </div>
            <div class="piceBuyButton-container">
              <h5>{this.props.price} SEK</h5>
              <button class="buyButton">Köp</button>
            </div>
            <p>Leveranstid: {this.props.deliveryTime} dagar.</p>
          </div>
        )
  }

}

export default Product
