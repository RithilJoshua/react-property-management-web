import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Using the close icon for example
import data from './TemplateData.json';

function Pop({ closeModal, applyFilters }) {
  const [filters, setFilters] = useState({
      adsearchterm: '',
      itemType: '',
      priceMin: '',
      priceMax: '',
      brand: '',
      dateMin: '',
      dateMax: '',
      location: '',
      availability: 'All',
  });

  const handleFilterChange = (e) => {
      const { name, value } = e.target;
      setFilters({ ...filters, [name]: value });
  };

  const applySearch = () => {
      applyFilters(filters);
      closeModal(false);
  };

  return (
    <div className="modelbackground">
      <div className="modelcontainer">
        <button className="sbtn" onClick={() => closeModal(false)}>
          <FontAwesomeIcon icon={faTimes} /> 
        </button>
        <div className="p_title">
            <label for="itemType">Type of item</label>
            <input type="text" id="itemType" placeholder='e.g Laptop' name='itemtype' onChange={handleFilterChange}/> 
        </div>
        <div className="price_r">
            <label>Price Range</label>
            <input type='text'></input>
            <p>-</p>
            <input type='text'/>
        </div>

        <div className="brand">
            <label for="b_n">Brand</label>
            <input type="text" className="b_n" />
        </div>

        <div className="date_r">
            <label>Date Range</label>
            <input type='date'></input>
            <p>-</p>
            <input type='date'/>
        </div>

        <div className="location">
            <label for="loc">Location</label>
            <input type="text" className="loc" />
        </div>

        <div className="Availability">
            <label for="avai">Availability</label>
            <select name="avail">
                <option >All</option>
                <option>Sale</option>
                <option>Rent</option>
            </select>
        </div>   
        <div className="p_footer">
          <button className="hh"onClick={() => closeModal(false)}>Cancel</button>
          <button className="hh"onClick={() => applySearch()}>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Pop;