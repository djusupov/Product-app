import React, { Component } from 'react';
import './ProductItem.css'

class ProductItem extends Component {
    render() {
        const { title, rebate, price, text, image, onAddBasket } = this.props
        return (
            <div className="box">
                <div className="img" style={{backgroundImage:`url(${image})`}}></div>
                <div className='block'>
                    <span>{title}</span>
                    <span style={{textDecoration: 'line-through'}}>Цена:{price}</span>
                    <span>Скидка:{rebate}</span>
                </div>
                <div>
                    <button onClick={onAddBasket} style={{borderRadius: '10px'}}>В Карзину</button>
                </div>
            </div>
        );
    }
}

export default ProductItem;