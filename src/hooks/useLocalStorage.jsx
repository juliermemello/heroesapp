import { useState, useEffect } from "react";

function getStorageValue(key, defaultValue) {
  try {
    const saved = localStorage.getItem(key);

    return saved !== null ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    return defaultValue;
  }
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
