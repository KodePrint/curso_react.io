import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem';
import arrow from '@icons/flechita.svg'
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{/* En esta arrow Function usa parentesis 
				para omitir el return y enviar el producto */}
				{ state.cart.map(product => (
					<OrderItem product={product} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
