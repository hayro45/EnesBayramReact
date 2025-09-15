import React from 'react'
import '../css/Product.css'

function Product({ product }) {
  const handleDetailsClick = () => {
    window.location.href = `/product/${product.id}`;
  }
  return (
    <div className='card'>
      <h5>{product.title}</h5>
      <img className="image" src={product.image} alt={product.title} />
      <p>{product.description.slice(0, 20) + '...'}</p>
      <p>${product.price}</p>
        <button className='btn' onClick={handleDetailsClick}>Detay</button>
    </div>
  )
}

export default Product
