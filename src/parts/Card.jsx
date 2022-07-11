import React from "react";
import { numberFormat } from "../service/NumberFormat";
import img1 from "../assets/img/product/a110.png";

const Card = (props) => {
  return (
    <div className="card">
      {/* <img className="card__img" src={img1} alt="product" /> */}
      <img className="card__img" src={require(`../assets/img/product/${props.productImage}`)} alt="product" />
      <div className="card__body">
        <p className="card__body--product">{props.productName}</p>
        <div className="card__body--price">
          <p className="card__body--price_first">
            From <span>{numberFormat(props.productPrice)}</span>
          </p>
          <p className="card__body--price_second">
            {numberFormat(props.productInstalment)}
            <span>/mo</span>
          </p>
        </div>
        <p className="card__body--variant">{props.productVariant}</p>
        <div className="card__dealer">
          <img src={require(`../assets/img/brand/${props.productBrand}`)} alt="brand" className="card__dealer--img" />
          <p className="card__dealer--name">{props.productDealer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
