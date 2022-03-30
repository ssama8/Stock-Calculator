import React, { useState } from "react";
import BuyWidget from "./BuyWidget";
import InfoWidget from "./InfoWidget";
const TransactionTracker = React.createContext();
const Transaction = () => {
	const [placedOrder, setPlacedOrder] = useState(false);
	const [purchase, setPurchase] = useState({
		date: "",
		label: "",
		orderPrice: "",
		shares: "",
		stockPrice: "",
		currentStockPrice: "",
		currentDate: "",
	});
	const placeOrder = (order) => {
		console.log(order);
		const {
			date,
			label,
			orderPrice,
			shares,
			stockPrice,
			currentStockPrice,
			currentDate,
		} = order;
		setPurchase({
			date,
			label,
			orderPrice,
			shares,
			stockPrice,
			currentStockPrice,
			currentDate,
		});
		console.log("order-placed");
		setPlacedOrder(true);
	};
	return (
		<TransactionTracker.Provider value={{ placeOrder, purchase }}>
			<section className='calculate'>
				<div className={placedOrder ? "grid order" : "flex order"}>
					<BuyWidget />
					{placedOrder && <InfoWidget />}
				</div>
			</section>
		</TransactionTracker.Provider>
	);
};
export { TransactionTracker };
export default Transaction;
