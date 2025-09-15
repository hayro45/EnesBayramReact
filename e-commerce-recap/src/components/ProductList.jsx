import React from 'react'
import { useEffect } from 'react';
import { getAllProducts } from '../redux/slices/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Product from './Product';

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product.products);
    
    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    return (
        <div>
            <h2>Product List</h2>
            <div className='flex-row' style={{ gap: '20px', flexWrap: 'wrap' }}>
                {products && products.map((product) => (
                            <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
