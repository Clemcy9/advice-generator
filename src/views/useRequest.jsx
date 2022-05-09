import React, { useState, useEffect } from "react";

function Request() {
  const [advice, setAdvice] = useState(" first value");
  const [state, setState] = useState(true);

  function handleClick() {
    setState(!state);
  }

  const url = "https://api.adviceslip.com/advice";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((jso) => setAdvice(jso["slip"]));
  }, [state]);

  return (
    <div>
      <p>{JSON.stringify(advice["advice"])}</p>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}

export default Request;
