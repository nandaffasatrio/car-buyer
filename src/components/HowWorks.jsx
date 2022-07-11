import "../assets/scss/howworks.scss";

const HowWorks = () => {
  return (
    <section className="howworks">
      <h2 className="howworks__title">How It Works</h2>
      <p className="howworks__caption">This is how our products works </p>
      <div className="container howworks__wrapper">
        <div className="howworks__findcar">
          <img className="howworks__findcar--img" src={require("../assets/img/findcar.png")} alt="logo" />
          <h4 className="howworks__findcar--title">Find Car</h4>
          <p className="howworks__findcar--caption">Our cars are located at prime areas where by there won’t be problem with transportation </p>
        </div>
        <div className="howworks__findcar">
          <img className="howworks__findcar--img" src={require("../assets/img/makepayment.png")} alt="logo" />
          <h4 className="howworks__findcar--title">Make Payment</h4>
          <p className="howworks__findcar--caption">Our estates comes with good network,portable water , 24hrs light and round the clock security.</p>
        </div>
        <div className="howworks__findcar">
          <img className="howworks__findcar--img" src={require("../assets/img/official.png")} alt="logo" />
          <h4 className="howworks__findcar--title">Make it Official</h4>
          <p className="howworks__findcar--caption1">We have been in business for over 32 years,for client outside the country you can trust us to deliver well. </p>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
