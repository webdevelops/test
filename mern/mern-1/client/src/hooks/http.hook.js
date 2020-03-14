import { useState, useCallback } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // console.log("useHttp -> loading", loading)

  const request = useCallback(async (
    url,
    method = 'GET',
    body = null,
    headres = {}
    // headres = { 'Content-Type': 'application/json' }
  ) => {
    setLoading(true);

    try {
      if (body) {
        body = JSON.stringify(body);
        headres['Content-Type'] = 'application/json'
      }
      
      const response = await fetch(url, { method, body, headres });
      console.log("useHttp -> response", response)
      const data = await response.json();
      // console.log("useHttp -> data", data)

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.');
      }

      setLoading(false);
      return data;

    } catch (err) {
      setError(err.message);
      setLoading(false);
      throw err;
    }
  }, []);

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
};