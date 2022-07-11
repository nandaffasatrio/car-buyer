import "../assets/scss/question.scss";

const Question = () => {
  return (
    <section className="question">
      <img className="question__img" src={require("../assets/img/bmw.png")} alt="logo" />
      <div className="question__heading">
        <h2 className="question__heading--title">Questions about buying or renting?</h2>
        <a className="question__heading--btn" href="/">
          Ask Us
        </a>
      </div>
    </section>
  );
};

export default Question;
