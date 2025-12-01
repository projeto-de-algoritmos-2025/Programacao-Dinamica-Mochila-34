import { createContext, useContext, useState } from 'react';
const ResultCardData = createContext();

export const ResultCardProvider = ({ children }) => {
  const [outputCardData, setOutputCardData] = useState({ loaded: false });
  
  return (
    <ResultCardData.Provider value={{ outputCardData, setOutputCardData }}>
      {children}
    </ResultCardData.Provider>
  );
};

export const useResultCardData = () => {
  const { outputCardData, setOutputCardData } = useContext(ResultCardData);

  return { outputCardData, setOutputCardData };
};
