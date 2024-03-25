import React, { useState } from 'react';
import './App.css';
import './style.css';
import './media.css';
import'./popup.css';
import data from './TemplateData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Pop from"./pop.jsx";
import Imgpop from"./imgpop.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [filterType,setFilterType]=useState('');
  const clearFavorites = () => {
    setFavorites([]);
  };
  const[openmodal,setopenmodal] = useState(false);

  const[openimgmodel,setopenimgmodel] = useState(null);
  


  const addToFavorites = (product) => {
    // Check if the product already exists in favorites
    const isExisting = favorites.some((item) => item.id === product.id);

    if (!isExisting) {
      setFavorites([...favorites, product]);
    }else{
      alert("This product is alrady in your favoutites")
    }
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favorites.filter((item) => item.id !== productId);
    setFavorites(updatedFavorites);
  };

  const handleLogoClick = () => {
    setFilterType(''); // Reset filter when logo clicked
  };

  const applyFilters = (filters) => {
    setSearchTerm(filters.adsearchterm);
    setFilterType(filters.availability);
  }

  const handleDragStart = (event, product)=> {
    event.dataTransfer.setData('product',JSON.stringify(product));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedProduct = JSON.parse(event.dataTransfer.getData('product'));
    addToFavorites(droppedProduct);
  };

  const handleDragOver = (event) =>{
    event.preventDefault();
  }

  
  

  

  //header of the page

  return (
    <>
      <div className="header">
        <div className="logo" onClick={handleLogoClick}>ProP.fi</div>
        <div className="main_text">
          <p>Bileve In Finding It</p>
        </div>
        <div className='all'>
        <div className="search">
          <div className='heado'><p>Search gadget or Location</p></div>
          <input
            id="searchInput"
            type="text"
            className="sbar"
            placeholder="search"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
          <div className='btnty'>
          <button className='rent' onClick={()=> setFilterType('Rent')}>for rent</button>
          <button className='sale' onClick={()=> setFilterType('Sale')}>for sale</button>
        </div>
        </div>
        
        </div>
        
    
      </div>
              
      <div className="advance-search">
        <button className="ad_btn"
         onClick={()=>{
          setopenmodal(true);
          }}
          >
            advance search
          </button>
        {openmodal&&<Pop closeModal={setopenmodal} applyFilters={applyFilters}/>} {/*ádvance search popup*/}
  
      </div>

      <div className="boxes">
        <div className="product_box">
        {data
  .filter((val) => {{/*filtering products by searchterm*/}
    if (searchTerm === '') {
      return val.type === filterType || filterType === '';
    } else {
      const titleMatch = val.typeh.toLowerCase().includes(searchTerm.toLowerCase());
      const locMatch = val.location.toLowerCase().includes(searchTerm.toLowerCase());
      return (titleMatch || locMatch) && (val.type === filterType || filterType === '');
    }
  })
            .map((val) => {
              return (
                <div draggable  onDragStart={(event) =>handleDragStart(event,val)}className="template" key={val.id} >
                   <img src={val.picture} alt="" onClick={() => setopenimgmodel(val.id)} />
                  {openimgmodel === val.id && (
                    <Imgpop 
                  closeimgModal={() => setopenimgmodel(null)}      
                      productDetails={val} 
                      />
                  )}{/*rendering images form json file*/}
                  <h3>type: {val.typeh}</h3>
                  <p>Bedrooms: {val.bedrooms}</p>
                  <p>Location: {val.location}</p>
                  <p>price:{val.price}</p>
                 

                  <button
                    className="add_f"
                    onClick={() => addToFavorites(val)}
                  >
                    add to favourites
                  </button>
                </div>
              );
            })}
        </div>

        <div  droppable onDragOver={handleDragOver} onDrop={handleDrop} className="fav_box"> {/*favourite box ans stuff*/}
          <div className='icons'>
            <div className='fname'>Favourites</div>
            <div className='icon'><FontAwesomeIcon icon={faTrash} onClick={clearFavorites}/></div>
          </div>
          {favorites.map((favItem) => (
            <div draggable onDragStart={(event) => handleDragStart(event,favItem)} className="fav_item" key={favItem.id}>
              <img src={favItem.picture} alt="" />
              <h3 className='typ'>{favItem.typeh}</h3>
              <p className="price">{favItem.price}</p>
              <div className='btnback'>
              <button
                className="remove_f"
                onClick={() => removeFromFavorites(favItem.id)}
              >
                remove from favorites
              </button>
            </div>
              </div>
          ))}
        </div>
      </div>

      <div className="navbar">
        <div className="pare">
          Logo
        </div>
        <div className="mare">
          Search anything you want
        </div>
        <div className="kare">
         <a>rithljos@gmail.com</a>
        </div>
      </div>
    </>
  );
}

export default App;