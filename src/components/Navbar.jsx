import "../assets/scss/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img className="navbar__logo" src={require("../assets/img/logo.png")} alt="logo" />
        <div className="navbar__list">
          <p>New Cars</p>
          <p>Used Cars</p>
          <p>Reviews</p>
          <p>News</p>
        </div>
        <div className="navbar__item">
          <a className="navbar__login" href="/">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
