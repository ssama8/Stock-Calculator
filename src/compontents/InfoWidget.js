import React, { useContext } from "react";
import { TransactionTracker } from "./Transaction";
import styled from "styled-components";
const InfoWidget = () => {
	const { purchase } = useContext(TransactionTracker);
	console.log(purchase);
	const {
		date,
		label,
		orderPrice,
		shares,
		stockPrice,
		currentStockPrice,
		currentDate,
	} = purchase;
	console.log(currentStockPrice);
	const currentTotal = parseFloat(currentStockPrice) * parseInt(shares);
	const percentChange =
		((currentStockPrice - stockPrice) / stockPrice).toFixed(4) * 100;
	return (
		<Wrapper>
			<table>
				<tr>
					<th> </th>
					<th>Price </th>
					<th>Shares </th>
					<th>Total </th>
				</tr>

				<tr>
					<td>{date}</td>
					<td>{stockPrice}</td>
					<td>{shares}</td>
					<td>{orderPrice}</td>
				</tr>
				<tr>
					<td>{currentDate}</td>
					<td>{currentStockPrice}</td>
					<td>{shares}</td>
					<td>{currentTotal}</td>
				</tr>
				<tr>
					<td></td>
					<td>
						{currentStockPrice - stockPrice >= 0
							? `+ ${parseFloat(currentStockPrice - stockPrice).toFixed(2)}`
							: parseFloat(currentStockPrice - stockPrice).toFixed(2)}{" "}
					</td>
					<td></td>
					<td>
						{currentTotal - orderPrice >= 0
							? ` + ${parseFloat(currentTotal - orderPrice).toFixed(2)}`
							: parseFloat(currentTotal - orderPrice).toFixed(2)}
					</td>
				</tr>
			</table>
			<p className={percentChange >= 0 ? "more" : "less"}>
				{" "}
				Between {date} and {currentDate}, {label} has gone{" "}
				{percentChange >= 0 ? "Up" : "Down"} {percentChange}%
			</p>
			<h4>
				If you had purchased {shares} {shares === 1 ? "share" : "shares"} of
				stock of {label} stock at {stockPrice} per share for{" "}
				<span className={percentChange < 0 ? "more" : "less"}>
					${orderPrice}
				</span>{" "}
				on {date}, you would have{" "}
				<span className={percentChange >= 0 ? "more" : "less"}>
					{" "}
					${currentTotal}{" "}
				</span>{" "}
				today
			</h4>
			{percentChange <= 0 ? (
				<p>Looks like you dodged a bullet </p>
			) : (
				<p>
					I bet you wish you would of bought {label} stock sooner. It's alright
					though nobody can figure out the market. If somebody did, they would
					be gazillionaires
				</p>
			)}
		</Wrapper>
	);
};

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	table {
		border-radius: 5px;
		background-color: white;
	}
	td {
		background-color: #fff;
	}
	p {
		margin: 1rem 0;
	}
	@media screen and (max-width: 505px) {
		width: 100vw;
		padding: 0;
		* {
			font-size: 0.75rem;
			width: 90vw;
			margin: 0 auto;
			text-align: center;
		}
	}
`;

export default InfoWidget;
