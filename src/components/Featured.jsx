import "../assets/scss/featured.scss";

const Featured = () => {
  return (
    <div className="wrapper">
      <section className="featured">
        <div className="container featured__heading">
          <h2 className="featured__heading--title">Our Featured Vehicles</h2>
          <p className="featured__heading--caption">One of our biggest product to be featured and that has sold out the most.</p>
        </div>{" "}
        <div className="featured__btn">
          <a href="/">Show More</a>
        </div>{" "}
      </section>
      <div className="featured__card">
        <div className="featured__palace">
          <img className="featured__img--2" src={require("../assets/img/lekki.png")} alt="logo" />
          <div className="featured__palace--body">
            <h3>The Palace</h3>
            <p>Duplex</p>
          </div>
          <div className="featured__palace--price">
            <p>Lekki, phase 2</p>
            <span>$2,000</span>
          </div>
        </div>
        <div className="featured__palace">
          <img className="featured__img--3" src={require("../assets/img/m3.png")} alt="logo" />
          <div className="featured__palace--body">
            <h3>Ivy Rory</h3>
            <p>Duplex</p>
          </div>
          <div className="featured__palace--price">
            <p>Lekki, phase 2</p>
            <span>$2,000</span>
          </div>
        </div>
        <img className="featured__img--1" src={require("../assets/img/ride.png")} alt="logo" />
      </div>
    </div>
  );
};

export default Featured;
