import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const DataContext = createContext();

function DataProvider({ children }) {
  const [dataArray, setDataArray] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // -----------getting the detatils for the selected user only, by making use of useContext the data is published------
    axios.get('https://panorbit.in/api/users.json').then((resp) => {
      setDataArray(resp.data.users)
      const filteredData = resp.data.users.filter((el) => el.id === Number(id));
      setFilteredArray(filteredData);
    });
  }, [id]);

  const contextValue = {
    dataArray,
    filteredArray
  };
  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
