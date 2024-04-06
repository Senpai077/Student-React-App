import React from "react";
import { useNavigate } from "react-router-dom";

const ViewMore = () => {
  const navigate = useNavigate();

  const back = (e) => {
    if (e.target.className == "view") navigate("/home/allstudents");
  };

  return (
    <section className="view" onClick={back}>
      <div className="userData"></div>
    </section>
  );
};

export default ViewMore;
