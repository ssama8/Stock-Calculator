import React, { useEffect } from "react";
import { ExampleChart, IncomeStatement } from "../compontents/Charts/index";
import StockSlicedValues from "./StockSlicedValues";
import IncomeStatements from "./IncomeStatements";
import { useGlobalContext } from "../context/context.js";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
const StockChart = () => {
	const {
		stockData,
		isLoading,
		setFrequency,
		dropdownVal,
		setDropdownVal,
		frequency,
		handleChange,
		setDates,
		label,
	} = useGlobalContext();

	let keys = Object.entries(stockData);

	let test = [];
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i][1]["4. close"];
		test.push({ label: keys[i][0], value: key });
	}
	if (dropdownVal === "five days") {
		test = test.slice(0, 5).reverse();
	} else if (dropdownVal === "month") {
		test = test.slice(0, 20).reverse();
	} else if (dropdownVal === "3 months") {
		test = test.slice(0, 12).reverse();
	} else if (dropdownVal === "6 months") {
		console.log("running");
		test = test.slice(0, 24).reverse();
	} else if (dropdownVal === "year") {
		test = test.slice(0, 13).reverse();
	} else if (dropdownVal == "5 years") {
		test = test.slice(0, 60).reverse();
	} else if (dropdownVal === "10 years") {
		console.log(test);

		test = test.slice(0, 120);
		let first = test.shift();
		let last = test.pop();
		test = test.reverse().filter((label, index) => {
			return index % 3 === 0;
		});
		test.unshift(last);
		test.push(first);
		console.log(test);
	} else {
		test = test.reverse();
	}

	let chartData = [...test];
	useEffect(() => {
		setDates(test);
	}, [stockData, dropdownVal]);
	//get the range to set the yaxis values
	const sorted = chartData.sort((a, b) => {
		return a.value - b.value;
	});

	const min = sorted[0].value;
	const max = sorted[sorted.length - 1].value;
	const range = Math.floor((max - min) / 2);
	const values = { min: min - range, max: max + range };
	if (values.min < 0) values.min = 0;

	if (dropdownVal === "five-years" || dropdownVal === "ten-years") {
		chartData.shift();
		chartData.pop();
		chartData = chartData.filter((val, index) => {
			return index % 2 !== 0 ? val : null;
		});
	}
	if (isLoading || !test)
		return (
			<>
				<StockSlicedValues />
				<div className='grid'>
					<section>
						<ul className='time-periods'>
							<li onClick={() => handleChange("five days")}>5D</li>
							<li onClick={() => handleChange("month")}>1M</li>
							<li onClick={() => handleChange("3 months")}>3M</li>
							<li onClick={() => handleChange("6 months")}>6M</li>
							<li onClick={() => handleChange("year")}>1y</li>
							<li onClick={() => handleChange("5 years")}>5Y</li>
							<li onClick={() => handleChange("10 years")}>10Y</li>
							<li onClick={() => handleChange("all time")}>Max</li>
						</ul>
						<div className='loading'></div>
					</section>
					<section>
						<IncomeStatement />
					</section>
				</div>
			</>
		);
	if (stockData === undefined || stockData.length === 0) {
		return (
			<>
				<h1>Can't get data Exceeded Daily Request Limit </h1>
			</>
		);
	}
	const currentEndpoint = test[test.length - 1].value;
	const currentStartpoint = test[0].value;
	const change = (currentEndpoint - currentStartpoint).toFixed(2);
	const percentChange = ((change / currentStartpoint) * 100).toFixed(2);
	// const percentChange = -3;
	return (
		<>
			<StockSlicedValues
				label={label}
				startPoint={currentStartpoint}
				endPoint={currentEndpoint}
				change={change}
				percent={percentChange}
				dropdownVal={dropdownVal}
				test={test}
			/>
			<div className='grid'>
				<section className='chart'>
					<ul className='time-periods'>
						<li onClick={() => handleChange("five days")}>5D</li>
						<li onClick={() => handleChange("month")}>1M</li>
						<li onClick={() => handleChange("3 months")}>3M</li>
						<li onClick={() => handleChange("6 months")}>6M</li>
						<li onClick={() => handleChange("year")}>1y</li>
						<li onClick={() => handleChange("5 years")}>5Y</li>
						<li onClick={() => handleChange("10 years")}>10Y</li>
						<li onClick={() => handleChange("all time")}>Max</li>
					</ul>
					{/* <select
				onChange={(e) => {
					handleChange(e);
				}}
				value={dropdownVal}
				id='time-periods'>
				<option value='day'>1D</option>
				<option value='week'>1W</option>
				<option value='month'>1M</option>
				<option value='year'>1Y</option>
				<option value='five-years'>5Y</option>
				<option value='ten-years'>10Y</option>
			</select> */}
					<ExampleChart className='dynamic-chart' data={test} range={values} />
				</section>
				<IncomeStatements />
			</div>
		</>
	);
};

export default StockChart;
