import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function naviagteHAndler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to the <Link to="/products">products page</Link>{" "}
      </p>
      <p>
        <button onClick={naviagteHAndler}>Using Navigate Handler</button>
      </p>
    </>
  );
};

export default Home;
