import { useState, useEffect } from "react";

export interface FetchLog {
  url: string;
  method: string;
  payload: any;
  status: number | string;
  error?: string;
  timestamp: string;
}

type FetchOptions = RequestInit;

export const useFetch = <T = any>(url: string, options: FetchOptions = {}) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData: T = await response.json();
        setData(responseData);

        const log: FetchLog = {
          url,
          method: options.method || "GET",
          payload: options.body ? JSON.parse(options.body.toString()) : null,
          status: response.status,
          timestamp: new Date().toISOString(),
        };

        const prevLogs: FetchLog[] = JSON.parse(localStorage.getItem("fetchLogs") || "[]");
        localStorage.setItem("fetchLogs", JSON.stringify([...prevLogs, log]));
      } catch (err: any) {
        setError(err.message);

        const errorLog: FetchLog = {
          url,
          method: options.method || "GET",
          payload: options.body ? JSON.parse(options.body.toString()) : null,
          status: "error",
          error: err.message,
          timestamp: new Date().toISOString(),
        };

        const prevLogs: FetchLog[] = JSON.parse(localStorage.getItem("fetchLogs") || "[]");
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
