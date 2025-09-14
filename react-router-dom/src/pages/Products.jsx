import React from 'react'
import Product from '../components/Product'
import { useLocation } from 'react-router-dom';
import products from '../data/products.json';
import Categories from '../components/Categories';

function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

   const filteredProducts = category
    ? products.filter(product => product.category.toLowerCase() === category)
    : products;

  return (
    <div className='products-page'>
      <aside className='sidebar'>
          <Categories />
      </aside>

      <main className='main-content'>
        <h1>Ürünlerimiz</h1>
        {filteredProducts && filteredProducts.length > 0 ? (
          <div className="product-list">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p>Ürün bulunamadı.</p>
        )}
      </main>
    </div>
  )
}



export default Products
