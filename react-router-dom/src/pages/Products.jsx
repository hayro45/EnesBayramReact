import React from 'react'
import Product from '../components/Product'

const products = [
  { id: 1, name: 'Ürün 1', description: 'Bu ürün 1 açıklamasıdır.' },
  { id: 2, name: 'Ürün 2', description: 'Bu ürün 2 açıklamasıdır.' },
  { id: 3, name: 'Ürün 3', description: 'Bu ürün 3 açıklamasıdır.' },
];

function Products() {
  return (
    <div>
      <h1>Ürünlerimiz</h1>
      {products && products.length > 0 ? (
        <div className="product-list">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>Ürün bulunamadı.</p>
      )}
    </div>
  )
}



export default Products
