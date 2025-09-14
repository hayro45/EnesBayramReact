import { useNavigate } from 'react-router-dom'

function Product({ product }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Fiyat: {product.price}</p>
      <p>{product.description.slice(0, 10)}...</p>
      <button onClick={() => navigate(`/product-details/${product.id}`)}>Detaylar</button>
    </div>
  )
}

export default Product
