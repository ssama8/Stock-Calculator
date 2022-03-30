import React, { useEffect, useRef, useState, useContext } from "react";
import { TransactionTracker } from "./Transaction";
import { useGlobalContext } from "../context/context";

const BuyWidget = ({ order }) => {
	const { placeOrder } = useContext(TransactionTracker);
	const { label, dates } = useGlobalContext();
	const { changePrice, setChangePrice } = useState(true);
	const stockValue = useRef(null);
	const [balance, setBalance] = useState(10000);
	const [stockPrice, setStockPrice] = useState(0);
	const [shares, setShares] = useState(1);
	const [total, setTotal] = useState(stockPrice * shares);
	const [purchaseError, setPurchaseError] = useState({
		error: false,
		msg: "test",
	});

	useEffect(() => {
		setStockPrice(!dates.length ? 0 : parseFloat(dates[0].value).toFixed(2));
	}, [dates]);
	useEffect(() => {
		const requestedTotal = stockPrice * shares;
		if (requestedTotal <= balance) {
			setTotal(stockPrice * shares);
		} else {
			console.log("running");
			setShares(shares - 1);
			setPurchaseError({ error: true, msg: "Not enough funds" });
		}

		// requestedTotal <= balance
		// 	? setTotal(stockPrice * shares)
		// 	: setShares(shares - 1);
	}, [shares, stockPrice]);
	useEffect(() => {
		if (!purchaseError.error) return;
		let removeMsg = setTimeout(() => {
			setPurchaseError({ error: false, msg: "" });
		}, 2000);
		return () => clearTimeout(removeMsg);
	}, [purchaseError.error]);
	useEffect(() => {}, [shares]);
	if (!dates.length) {
		return <></>;
	}
	const handleChange = (e) => {
		console.log(e.target.value);
	};
	return (
		<section className='buy-stock'>
			<h3>Choose When you want to buy {label} stock </h3>
			<h5 className='balance'> Balance: ${balance}</h5>
			<div className='purchase-details'>
				<label htmlFor='price'>Stock Price: </label>
				<input
					type='text'
					name=''
					id='price'
					value={stockPrice}
					onChange={() => null}
				/>

				<label htmlFor='number-shares'>Number of Shares: </label>
				<input
					type='number'
					name=''
					id='number-shares'
					value={shares}
					onChange={(e) =>
						e.target.value > 0 ? setShares(e.target.value) : null
					}
					min='1'
				/>
				<label htmlFor='total-price'> Total: </label>
				<input
					type='text'
					name=''
					id='total-price'
					value={total.toFixed(2)}
					onChange={() => null}
				/>
				<select
					name=''
					id=''
					ref={stockValue}
					onChange={(e) => {
						const obj = JSON.parse(e.target.value);
						console.log(obj);
						console.log(obj["value"]);
						setStockPrice(parseFloat(obj["value"]));
					}}>
					{dates.map((date, index) => {
						return (
							<option key={index} value={JSON.stringify(date)}>
								{date.label}
							</option>
						);
					})}
				</select>

				{purchaseError.error && <h4>{purchaseError.msg}</h4>}
			</div>

			<div className='order-summary'>
				<h3>Summary Of Purchase</h3>
				<p>
					Purchasing {shares} shares of {label}{" "}
				</p>
				<p>
					for ${total.toFixed(2)} on {"3-23-22"}
				</p>
				<button
					onClick={() => {
						const { current } = stockValue;
						let date = JSON.parse(current.value);
						console.log(date);
						date = date["label"];
						const orderPrice = total.toFixed(2);
						placeOrder({
							orderPrice,
							shares,
							label,
							stockPrice,
							date,

							currentStockPrice: dates[dates.length - 1].value,
							currentDate: dates[dates.length - 1].label,
						});
					}}>
					{" "}
					Place Order
				</button>
			</div>
		</section>
	);
};

export default BuyWidget;
