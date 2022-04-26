import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
    render() {
        const { data, onAddBasket } = this.props
        return (
            <>
            <h1 style={{textAlign: 'center', margin: '20px'}}>Короче это меню</h1>
            <div style={{display:'flex',flexWrap: 'wrap',justifyContent: 'center',alignItems: 'center'}}>
                {
                    data.map((elem, index) => {
                        return <ProductItem key={index} {...elem} onAddBasket={()=>onAddBasket(elem.id)}/>
                    })
                }
            </div>
            </>
        );
    }
}

export default ProductList;