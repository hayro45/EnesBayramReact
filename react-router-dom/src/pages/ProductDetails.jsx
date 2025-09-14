import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products.json';
import { FaArrowCircleLeft } from 'react-icons/fa';
import RelatedProducts from '../components/RelatedProducts';

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  
  return (
    <div className="product-details">
        <FaArrowCircleLeft className='back-button' onClick={() => window.history.back()} />
        <h3>{product.name}</h3>
        <p>Fiyat: {product.price}</p>
        <p>Açıklama: {product.description}</p>
        <RelatedProducts currentProductId={product.id} currentCategory={product.category} />
    </div>
  )
}

export default ProductDetails
