import React from 'react'
import products from '../data/products.json';
import { Link } from 'react-router-dom'
function Categories() {
  const categories = Array.from(new Set(products.map(product => product.category)));
  const categoryProductsCount = categories.map(category => ({
    category,
    count: products.filter(product => product.category === category).length
  }));
  categoryProductsCount.sort((a, b) => b.count - a.count);
  

  return (
    <div>
      <h2>Kategoriler</h2>
      <ul>
        <li>
          <Link to="/products">Tüm Ürünler</Link>
        </li>
        {categoryProductsCount.map(({ category, count }, index) => (
          <li key={index}>
            <Link to={`/products?category=${category.toLowerCase()}`}>
              {category} ({count})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
