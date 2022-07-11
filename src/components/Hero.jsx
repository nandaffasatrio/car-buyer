import "../assets/scss/hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <h1 className="hero__title">Car Marketplace</h1>
        <p className="hero__caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <a className="hero__btn" href="/">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
