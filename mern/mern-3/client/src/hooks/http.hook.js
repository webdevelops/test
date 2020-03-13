import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  console.log("useHttp -> loading", loading)
  const [error, setError] = useState(null);
  
  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {  // try without useCall..
    // console.log("request -> body", body)
    // console.log("request -> headers", headers)
    setLoading(true);
    try {
      const response = await fetch(url, { method, body, headers });
      console.log("request -> response", response)
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      setLoading(false);
      return data;

    } catch (err) {
      setLoading(false);
      setError(err.message);
      throw err;
    }
  }, []);

  const clearError = () => setError(null);

  return { loading, request, error, clearError };
};