import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import OrderItem from '@components/OrderItem';
import '@styles/MyOrder.scss';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	const priceTotal = () => {
		const reducer = (acum, value) => acum + value.price;
		const total = state.cart.reduce(reducer, 0)
		return total;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{ state.cart.map(order => <OrderItem order={order} key={`order-item:${order.id}`}/>) }
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${priceTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
