import React from "react";
import "../assets/scss/product.scss";

const SearchBar = () => {
  const [showResults, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(true);

  return (
    <section className="search">
      <div className="search__new" onClick={onclick}>
        <h4 className="search__new--title">New/Used</h4>
        <p>New Car</p>
        {showResults ? <NewSearch /> : null}
        {/* <div className="search__new--choice" style={{ display: "none" }}>
          <label htmlFor="/">
            {" "}
            <input type="radio" name="flexRadioDefault" id="car" />
            New Car ( Authorised Dealer)
          </label>

          <label htmlFor="/">
            {" "}
            <input type="radio" name="flexRadioDefault" id="car2" />
            New Car ( Parallel Importer )
          </label>

          <label htmlFor="/">
            {" "}
            <input type="radio" name="flexRadioDefault" id="car3" />
            Used Cars
          </label>
        </div> */}
      </div>
      <div className="search__price">
        <h4 className="search__price--title">Price Range</h4>
        <div className="search__price--caption">
          <p>
            <img src={require("../assets/img/money.png")} alt="money" />
            $10.000
          </p>
          <p>--</p>
          <p>
            <img src={require("../assets/img/money.png")} alt="money" />
            $100.000
          </p>
        </div>
        <div className="search__price--section" style={{ display: "none" }}>
          <h4>Price Range</h4>
          <div className="price">
            <div className="price__value">
              <div className="price__value--min">
                <p>Min</p>
                <input type="number" placeholder="S$ 20.000" />
              </div>
              <p>-</p>
              <div className="price__value--max">
                <p>Max</p>
                <input type="number" placeholder="S$ 500.000" />
              </div>
            </div>
            <hr />
            <div className="price__btn">
              <button className="price__btn--clear">clear</button>
              <button className="price__btn--save">Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="search__type">
        <h4 className="search__type--title">Vehicle Type</h4>
        <p>+ 10 more</p>
        <div className="type" style={{ display: "none" }}>
          <div className="type__title">
            <h4>Vehicle Type</h4>
          </div>
          <div className="type__section">
            <label htmlFor="/">
              <input type="checkbox" />
              Bus
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Lorry
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              SUV
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Classic Car
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              MPV
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Truck
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Coupe
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Pickup
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Van (Passenger)
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Convertible
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Sedan
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Van (Goods)
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Hatchback
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Sport Car
            </label>
            <label htmlFor="/">
              <input type="checkbox" />
              Wagon
            </label>
          </div>
          <hr />
          <div className="type__btn">
            <button className="type__btn--clear">clear</button>
            <button className="type__btn--save">Save</button>
          </div>
        </div>
      </div>
      <div className="search__btn">
        <button className="search__btn--link">Search</button>
      </div>
    </section>
  );
};
const NewSearch = () => (
  <div className="search__new--choice">
    <label htmlFor="/">
      {" "}
      <input type="radio" name="flexRadioDefault" id="car" />
      New Car ( Authorised Dealer)
    </label>

    <label htmlFor="/">
      {" "}
      <input type="radio" name="flexRadioDefault" id="car2" />
      New Car ( Parallel Importer )
    </label>

    <label htmlFor="/">
      {" "}
      <input type="radio" name="flexRadioDefault" id="car3" />
      Used Cars
    </label>
  </div>
);
export default SearchBar;
