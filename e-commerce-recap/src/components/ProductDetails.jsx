import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../redux/slices/productSlice';
import '../css/Product.css'
import { addToCart } from '../redux/slices/cartSlice';

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.selectedProduct);

    const cart = useSelector((state) => state.cart.carts);
    console.log(cart);
    const [quantity, setQuantity] = useState(0);

    const handleQuantityIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleQuantityDecrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = (quantity) => {
        if (quantity > 0) {
            const productToAdd = { ...product, quantity };
            dispatch(addToCart(productToAdd));
        }
    };


    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);
    
    return (
        <div>
            <h1>Product Details Page</h1>
            <p>Product ID: {id}</p>
            {product ? (
                <div>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title} className='image' style={{height: '400px', width: '600px' }} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>

                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <button style={{
                                padding: '10px',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }} name='increase'>+</button>

                        <span style={{margin: '0 10px'}}>{quantity}</span>

                        <button style={{
                                padding: '10px',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }} name='decrease'>-</button>
                        <button style={{
                            marginLeft: '20px',
                                padding: '10px',
                                backgroundColor: '#333',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px', 
                                cursor: 'pointer'}}>Sepete Ekle</button>
                    </div>
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    )
}

export default ProductDetails
