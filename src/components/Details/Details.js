import React, { Component } from 'react';
import './Details.css'

class Details extends Component {
    render() {
        const { image, title, price, rebate } = this.props.cart
        const {onDeleteItem} = this.props
        return (
            <div className="box1">
                <img src={image} alt="" />
                <div className='block1'>
                    <span>{title}</span>
                    <span style={{ textDecoration: 'line-through' }}>Цена:{price}</span>
                    <span>Скидка:{rebate}</span>
                </div>
                <div>
                    <button onClick={onDeleteItem} style={{ borderRadius: '10px' }}>Удалить из карзины</button>
                </div>
            </div>
        );
    }
}

export default Details;