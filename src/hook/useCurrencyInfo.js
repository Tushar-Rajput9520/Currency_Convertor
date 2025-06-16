// src/hook/useCurrencyInfo.js
import { useEffect, useState } from 'react';

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    const getCurrencyData = async () => {
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/${currency}`);
        const result = await response.json();
        setData(result.rates || {});
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    getCurrencyData();
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
