import React from "react";

export default function AboutView() {
  return (
    <>
      <Whois />
      <Concept />
    </>
  );
}

function Whois() {
  return (
    <div className="card">
      <h2 className="title-card">Qui sommes nous ?</h2>
      <div className="row ">
        <div className="col left">
          <h3 className="subtitle-card"> € / Personnes</h3>
          <p>Livraison Gratuite à partir de €.</p>
        </div><input type="checkbox" name="choix1" value="1"/> 
        <div className="col right">
          <img alt={"Photo1"} className="img_desc" src={""} />
          <img alt={"Photo2"} className="img_desc" src={""} />
          <img alt={"Photo3"} className="img_desc" src={""} />
        </div>
      </div>
    </div>
  );
}

function Concept() {
  return (
    <div className="card">
      <h2 className="title-card">Que proposons-nous ?</h2>
      <div className="row ">
        <div className="col left">
          <h3 className="subtitle-card"> € / Personnes</h3>
          <p>Livraison Gratuite à partir de €.</p>
        </div>

        <div className="col right">
          <img alt={"desc"} className="img_desc" src={""} />
        </div>
      </div>
    </div>
  );
}
