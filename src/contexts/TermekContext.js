import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const TermekContext = createContext("");

export const TermekProvider = ({ children }) => {
  const [ termekLista, setTermekLista ] = useState([]);

    function postTermek(adat) {
    console.log(adat);
    axios
      .post("https://fakestoreapi.com/products",adat)
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);
      });
  }


  function deleteTermek(adat) {
    console.log(adat);
    axios
      .delete("https://fakestoreapi.com/products"+"/"+adat.id)
      .then(function (response) {
        console.log(response);
        setTermekLista(prevLista => prevLista.filter(termek => termek.id !== adat.id));
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  function getTermekek() {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setTermekLista(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  /*
  useEffect asszinkron működések esetén használjuk, és beállíthatunk függőségeket a második paraméterében
  */
  useEffect(() => {
    getTermekek();
  }, []);

  return (
    <TermekContext.Provider value={{ termekLista, deleteTermek }}>
      {children}
    </TermekContext.Provider>
  );
};
