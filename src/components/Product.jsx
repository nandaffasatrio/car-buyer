import React from "react";
import SearchBar from "../parts/SearchBar";
import "../assets/scss/product.scss";
import Card from "../parts/Card";
import { allproducts, sportcar } from "../service/filter";

class Product extends React.Component {
  render() {
    return (
      <section className="product">
        <SearchBar />
        <div className="product__wrapper">
          <div className="product__img">
            <img src={require("../assets/img/ride.png")} />
          </div>
          {allproducts.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <div className="card__product">
                  <Card
                    productId={product.id}
                    productName={product.name}
                    productPrice={product.price}
                    productImage={product.image[0]}
                    productInstalment={product.instalment}
                    productVariant={product.variant}
                    productBrand={product.brand[0]}
                    productDealer={product.dealer}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className="product__btn">
          <button className="product__btn--link">view more new cars</button>
        </div>
      </section>
    );
  }
}

export default Product;
