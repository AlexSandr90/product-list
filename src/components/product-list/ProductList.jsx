import React from 'react';
import classes from './product-list.module.scss';
import dataProduct from "../../data";

let storage = window.localStorage;

const ProductList = () => {
    return (
        <section className={classes.products}>
            Product List
        </section>
    );
};

export default ProductList;