import { useState, useEffect } from "react";

export const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        setData(responseData);

        const log = {
          url,
          method: options.method || "GET",
          payload: options.body ? JSON.parse(options.body) : null,
          status: response.status,
          timestamp: new Date().toISOString(),
        };

        const prevLogs = JSON.parse(localStorage.getItem("fetchLogs")) || [];
        localStorage.setItem("fetchLogs", JSON.stringify([...prevLogs, log]));
      } catch (err) {
        setError(err.message);

        const errorLog = {
          url,
          method: options.method || "GET",
          payload: options.body ? JSON.parse(options.body) : null,
          status: "error",
          error: err.message,
          timestamp: new Date().toISOString(),
        };

        const prevLogs = JSON.parse(localStorage.getItem("fetchLogs")) || [];
        localStorage.setItem("fetchLogs", JSON.stringify([...prevLogs, errorLog]));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, JSON.stringify(options)]);

  return { data, loading, error };
};

export default useFetch;