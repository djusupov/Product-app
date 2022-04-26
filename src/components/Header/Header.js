import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Main from '../Main/Main';
import './Header.css'
class Header extends Component {
    render() {
        const { basket } = this.props
        const newPost = basket.length
        return (
            <>
                <div className="header">
                    <div>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/Главная">
                            <h2><img src="https://i.pinimg.com/originals/94/ee/2f/94ee2fda4931c26b3c55ed23d28e885e.png" alt="" height="50px" width="100px" />Food</h2>
                        </Link>
                    </div>
                    <div className="header1">
                        <Link style={{ textDecoration: 'none', color: 'black' }}>
                            <ul className="header_box">
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/menu">
                                    <li>Меню</li>
                                </Link>
                                <Link style={{ textDecoration: 'none', color: 'black' }} to="/Basket">
                                    <li>Карзина {newPost === 0 ? 0 : newPost}</li>
                                </Link>
                            </ul>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;