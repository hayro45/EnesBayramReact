function Product({ product }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button>Sepete Ekle</button>
    </div>
  )
}

export default Product
