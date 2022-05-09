import { useEffect, useState } from "react";

function useFetch(url, toggle) {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((obj) => {
        setData(obj["slip"]["advice"]);
        setId(obj["slip"]["id"]);
        console.log(`typeof of res:${typeof str}`);
      })
      .catch((err) => setError(err.json()))
      .finally(() => setLoading(false));
  }, [url, toggle]);

  return [data, loading, error, id];
}

export default useFetch;
