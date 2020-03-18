import { useCallback } from 'react';

export const useMessage = () => {
  return useCallback(text => {
    console.log("useMessage -> text", text)
    if (window.M && text) {
      window.M.toast({ html: text });
    }
  }, []);
};