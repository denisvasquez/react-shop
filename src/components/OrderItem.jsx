import React, { useContext } from 'react';
import AppContext from "../context/AppContext.js";
import '@styles/OrderItem.scss';

import close from "@icons/icon_close.png";

const OrderItem = ({ order }) => {
	const { removeItem } = useContext(AppContext);
	return (
		<div className="OrderItem">
			<figure>
				<img src={ order.images[0] } alt="bike" />
			</figure>
			<p>{order.title}</p>
			<p>$ {order.price}</p>
			<img src={close} alt="close" onClick={() => removeItem(order)} />
		</div>
	);
}

export default OrderItem;
