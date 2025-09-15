import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../redux/slices/productSlice';
import '../css/Product.css'

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.selectedProduct);

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
                </div>
            ) : (
                <p>Product not found.</p>
            )}
        </div>
    )
}

export default ProductDetails
