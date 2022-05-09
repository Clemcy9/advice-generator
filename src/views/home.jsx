import useFetch from "../components/useFetch";
import { useState } from "react";

import icon from "../resources/images/icon.svg";
import divider from "../resources/images/divider1.svg";
import "./home.css";

function Home() {
  const [toggle, setToggle] = useState(false);

  const [data, loading, error, id] = useFetch(
    "https://api.adviceslip.com/advice",
    toggle
  );

  if (loading) {
    return (
      <div className="loader container">
        <div className="circle">
          <div className="dot" id="d0"></div>
          <div className="dot" id="d1"></div>
          <div className="dot" id="d2"></div>
          <div className="dot" id="d3"></div>
          <div className="dot" id="d4"></div>
          <div className="dot" id="d5"></div>
          <div className="dot" id="d6"></div>
          <div className="dot" id="d7"></div>
        </div>
      </div>
    );
  }
  if (error) <h1>errro occured at:{error}</h1>;
  return (
    <div className="homeParent">
      <div className="container">
        <p>ADVICE #{JSON.stringify(id)}</p>
        <p>{JSON.stringify(data)}</p>
        <img src={divider} style={{ width: "90%", margin: "1em" }} alt="" />
        <div id="toggle">
          <img src={icon} alt="" onClick={() => setToggle(!toggle)} />
        </div>
      </div>
    </div>
  );
}

export default Home;
