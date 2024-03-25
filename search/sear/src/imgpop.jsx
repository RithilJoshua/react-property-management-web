import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import data from './TemplateData.json';

function Imgpop({ closeimgModal, productDetails }) {
  const slideImages = [
    {
      url: productDetails.picture || '',
    },
    {
      url: productDetails.picture1 || '', // adding more images form the url
    },

    {
      url: productDetails.picture2 || '',
    },
    
    {
      url: productDetails.picture3|| '',
    },
    {
      url: productDetails.picture4|| '',
    },
    {
      url: productDetails.picture5|| '',
    },
    {
      url: productDetails.picture6|| '',
    },
    {
      url: productDetails.picture7|| '',
    }
    
  ];

  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '60vh',
    overflowY: 'auto',
    backgroundImage: `url(${slideImages[0].url})`, // Set default image as background
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
  };
  const addedDate = `${productDetails.added.month} ${productDetails.added.day}, ${productDetails.added.year}`;

  return (
    <div className="imgground">
      <div className="imgcontainer">
        <button className="clbtn" onClick={() => closeimgModal(false)}>X</button>
        <div className="img_t">
          <div className="slide-container">
            <Slide>
              {slideImages.map((image, index) => (
                <div className="imgsl" key={index}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '60vh',
                      overflowY: 'auto',
                      backgroundImage: `url(${image.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                </div>
              ))}
            </Slide>
          </div>
          <div className="imgb">
          <h3>{productDetails.typeh}</h3>
          <p className='di'>{productDetails.description}</p>
          <div className="boxd">
            <p>Number Of Bedrooms: {productDetails.bedrooms}</p>
            <p>Location: {productDetails.location}</p> {/*adding product by its value*/}
            <p>Price: {productDetails.price}</p>
            <p>Type: {productDetails.type}</p>
          </div>
          <div className='pics'>
          <iframe
  title="Map"
  width="400"
  height="400"
  frameBorder="0"
  scrolling="no"
  marginHeight="0"
  marginWidth="0"
  src="https://maps.google.com/maps?width=400&amp;height=400&amp;hl=en&amp;q=keleniya+(house%201)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
></iframe>
<img  className="imgplan"src={productDetails.plan}></img>
     </div> <button className="cls-botm" onClick={() => closeimgModal(false)}>Close</button>


          
     

          </div>
        </div>
      </div>
    </div>
  );
}

export default Imgpop;
