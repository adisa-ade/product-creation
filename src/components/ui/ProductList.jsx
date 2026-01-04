import React, { useEffect, useState } from 'react';
import './ProductList.css';
import axios from 'axios';
import { capitalize } from '../../utils/capitalize';

export default function ProductList() {
  const [products, setProducts] = useState(null);

  const options = {
    method: 'GET',
    url: 'https://api.oluwasetemi.dev/products',
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.request(options);
        setProducts(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <><h1>Our Products</h1>
    <div className="product-container">      
      {products === null ? (        
        <p>Loading...</p>                
      ) : (
        products.map((product) => {
          const imagesArray = JSON.parse(product.images);
          const image = imagesArray[0];
          return (        
            
            <div className="product-card" key={product.id}>
              <img src={image} alt={product.name} />
              <div className="product-content">
                <h3>{capitalize(product.name)}</h3>
                <p className="description">{capitalize(product.description)}</p>
                <div className="product-footer">
                  <span className="price">${product.price}</span>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>          
          );
        })
      )}
    </div>
    </>
  );
}
