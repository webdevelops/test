import { useCallback, useState, useEffect } from "react";

const storageName = 'userData';

export const useAuth = () => {
  const [token, setToken] = useState(null);
  // console.log("useAuth -> token", token)
  const [userId, setUserId] = useState(null);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);

    localStorage.setItem(storageName, JSON.stringify({
      token: jwtToken, userId: id
    }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);

    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login]);

  return { token, userId, login, logout };
};