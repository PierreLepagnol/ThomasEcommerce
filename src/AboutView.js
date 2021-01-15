import React from "react";

export default function AboutView() {
  return (
    <div className="features-small-item presview">
      <Whois />
      <Concept />
    </div>
  );
}

function Whois() {
  return (
    <div className="pad-15">
      <h2 className="title-card">Qui sommes nous ?</h2>
      <div className="row">
        <div className="col third">
          <img
            alt="Portrait - Thomas LEPAGNOL"
            className="img_desc"
            src="foo"
          />
          <p>Description Thomas</p>
        </div>

        <div className="col third">
          <img
            alt="Portrait - Valentin Moisan"
            className="img_desc"
            src="foo"
          />
          <p>Description Valentin</p>
        </div>

        <div className="col third">
          <img
            alt={"Portrait - Augustin De Laage"}
            className="img_desc"
            src="foo"
          />
          <p>Description Augustin</p>
        </div>
      </div>
    </div>
  );
}

function Concept() {
  const URLPhoto =
    "http://www.chapin-traiteur.com/images/buffet/CHAPIN-TRAITEUR---buffet---Lunch-salades-2-min.jpg";
  return (
    <div className="pad-15">
      <h2 className="title-card">Que proposons-nous ?</h2>
      <div className="col space-around">
        <img
          alt="IMG - Concept des Trois Canards"
          style={{ width: "20%" }}
          className="img_desc"
          src={URLPhoto}
        />
        <p>Description du concept</p>
      </div>
    </div>
  );
}
