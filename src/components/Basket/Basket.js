import React, { Component } from 'react';
import Details from '../Details/Details';

class Basket extends Component {
    render() {
        const { basket, onDeleteItem } = this.props
        const AllPost = basket.length
        return (
            <>
            <h1 style={{textAlign:'center',margin: '20px'}}>
                {AllPost === 0? 'Пока нету заказов': `Вы заказали ${AllPost} блюда`}
            </h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {
                    basket.map(elem => {
                        return (
                            <Details {...elem} onDeleteItem={() => onDeleteItem(elem.id)} />
                        )
                    })
                }
            </div>
            </>
        );
    }
}

export default Basket;