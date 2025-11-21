import React from "react";
import React, { useState, useContext } from "react";
import { TermekContext } from '../../contexts/TermekContext'


export default function TermekUrlap() {
  const { postTermek } = useContext(TermekContext);

  const [adat, setAdat] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  function valtozasKezelo(e) {
    const { name, value } = e.target;
    setAdat({ ...adat, [name]: value });
  }

  function kuldes(e) {
    e.preventDefault();
    postTermek(adat);

    // ürítés
    setAdat({
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    });
  }
  return (
    <div className="container mt-4">
      <h3>Új termék hozzáadása</h3>

      <form onSubmit={kuldes} className="mt-3">
        {/* Név */}
        <div className="mb-3">
          <label className="form-label">Név</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={adat.title}
            onChange={valtozasKezelo}
          />
        </div>

        {/* Ár */}
        <div className="mb-3">
          <label className="form-label">Ár</label>
          <input
            type="number"
            className="form-control"
            name="price"
            value={adat.price}
            onChange={valtozasKezelo}
          />
        </div>

        {/* Leírás */}
        <div className="mb-3">
          <label className="form-label">Leírás</label>
          <textarea
            className="form-control"
            name="description"
            rows="3"
            value={adat.description}
            onChange={valtozasKezelo}
          ></textarea>
        </div>

        {/* Kategória (select) */}
        <div className="mb-3">
          <label className="form-label">Kategória</label>
          <select
            className="form-select"
            name="category"
            value={adat.category}
            onChange={valtozasKezelo}
          >
            <option value="">Válassz kategóriát</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
        </div>

        {/* Kép URL */}
        <div className="mb-3">
          <label className="form-label">Kép URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={adat.image}
            onChange={valtozasKezelo}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Termék hozzáadása
        </button>
      </form>
    </div>
  );
}
