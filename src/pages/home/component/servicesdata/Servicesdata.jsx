import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../../../components/cards/Cards'
import { getProductsThunk, postProductsBasketThunk, postProductsWishThunk } from '../../../../redux/reducer/productSlice';
import styles from './Servicesdata.module.scss'

const Servicesdata = () => {

    const dispatch = useDispatch();

    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);
    const error = useSelector((state) => state.products.error);

    console.log(products);

    const addWish = (item) =>{
        dispatch(postProductsWishThunk(item))
    }

    const addBasket = (item) => {
        dispatch(postProductsBasketThunk(item))
    }

    useEffect(() => {
        dispatch(getProductsThunk())
    },[])

    if (error) return <p>sehv var</p>
    if (loading) return <p>Yuklenir</p>



    return (
        <>
            <div className={styles.container}>
                
                {products && products.map((item) => <Cards item={item} addtobasket={() => addBasket(item)} addtowish={() => addWish(item)} />)}
            </div>
        </>
    )
}

export default Servicesdata