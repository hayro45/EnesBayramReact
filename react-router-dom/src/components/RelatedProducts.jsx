import React from 'react';
import products from '../data/products.json';
import Product from './Product';

function RelatedProducts({ currentProductId, currentCategory }) {
  const relatedProducts = products.filter(
    (product) => product.category === currentCategory && product.id !== currentProductId
  );

  return (
    <div className="related-products">
      <h4>Benzer Ürünler</h4>
      {relatedProducts.length > 0 ? (
        <div className="product-list">
          {relatedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>Benzer ürün bulunamadı.</p>
      )}
    </div>
  );
}

export default RelatedProducts;