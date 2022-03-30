import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import data, { parsedWeekly } from "./stcokdata";
import MontlyData from "./monthlyStockdata";
import {
	IncomeStatement,
	BalanceSheets,
	CashFlows,
} from "./financialstatements.js";
const rootUrl = "https://www.alphavantage.co/query?function=";
const StockContext = React.createContext();
const StockProvider = ({ children }) => {
	const [frequency, setFrequency] = useState("Daily");
	const [isLoading, setIsLoading] = useState(true);
	const [label, setLabel] = useState("TSLA");
	const [stockData, setStockData] = useState(data);
	const [dropdownVal, setDropdownVal] = useState("five days");
	const [financialStatement, setFinancialStatement] =
		useState("INCOME_STATEMENT");
	const [incomeStatement, setIncomeStatement] = useState(IncomeStatement);
	const [balanceSheet, setBalanceSheet] = useState([]);
	const [cashFlows, setCashFlows] = useState([]);
	const [error, setError] = useState({
		error: false,
		msg: "Exceeded limit, come back tomorrow to look at more stocks",
	});
	const [dates, setDates] = useState({});
	const testURL = `${rootUrl}Time_Series_${frequency}&symbol=${label}&apikey=${process.env.REACT_APP_API_KEY} `;
	useEffect(() => {
		getStock();
	}, [frequency, label]);
	const getStock = async () => {
		//makeError();
		setIsLoading(true);
		let data;

		const incomeURL = `${rootUrl}INCOME_STATEMENT&symbol=${label}&apikey=${process.env.REACT_APP_API_KEY}`;
		const balanceURL = `${rootUrl}BALANCE_SHEET&symbol=${label}&apikey=${process.env.REACT_APP_API_KEY}`;
		const cashURL = `${rootUrl}CASH_FLOWS&symbol=${label}&apikey=${process.env.REACT_APP_API_KEY}`;

		// const response = await axios(testURL).catch((err) => console.log(err));

		const incomeStatement = await axios(incomeURL).catch((err) =>
			console.log(err)
		);
		// const balanceSheetReq = await axios(balanceURL).catch((err) =>
		// 	console.log(err)
		// );
		// const cashFlows = await axios(cashURL).catch((err) => console.log(err));

		//	const incomeResp = await incomeStatement.data.annualReports;
		//setIncomeStatement(incomeResp);

		// const balanceResp = await balanceSheetReq.data.annualReports;
		// setBalanceSheet(balanceResp);
		// console.log(balanceSheet);

		// const cashResp = await cashFlows.data.annualReports;
		// setCashFlows(cashResp);
		// console.log(balanceSheetReq);
		// if (
		// //	incomeStatement.data.Information
		// 	// ||
		// 	// balanceSheetReq.data.Information ||
		// 	// cashFlows.data.Information
		// ) {
		// 	setError(true, "Come back tomorrow to get more stock data");
		// }
		console.log(incomeStatement, balanceSheet, cashFlows);
		// if (financialStatement === "EARNINGS") {
		// 	setIncomeData(incomeResp.annualEarnings);
		// } else {
		// 	setIncomeData(incomeResp.annualReports);
		// }
		// console.log(incomeStatement.data.annualReports);

		// if (frequency === "Daily") {
		// 	data = await response.data[`Time Series (${frequency})`];
		// } else {
		// 	data = await response.data[`${frequency} Time Series`];
		// }
		// console.log(data);
		// setStockData(data);
		setIsLoading(false);
	};
	const makeError = (error = false, msg = "") => {
		setError({ error, msg });
	};

	const handleChange = (time) => {
		// const duration = e.target.value;
		let newfrequency;
		switch (time) {
			case "five days":
				newfrequency = "Daily";
				setStockData(data);

				break;
			case "month":
				newfrequency = "Daily";
				setStockData(data);

				break;

			case "3 months":
				newfrequency = "Weekly";
				setStockData(parsedWeekly);
				break;

			case "6 months":
				newfrequency = "Weekly";
				setStockData(parsedWeekly);

				break;

			case "year":
				newfrequency = "Monthly";
				setStockData(MontlyData);
				setDropdownVal("year");
				break;
			case "5 years":
				newfrequency = "Monthly";
				setStockData(MontlyData);
				setDropdownVal("five-years");
				break;
			case "10 years":
				newfrequency = "Monthly";
				setStockData(MontlyData);
				setDropdownVal("ten-years");
				break;
			default:
				newfrequency = "Monthly";
				setStockData(MontlyData);
				setDropdownVal("max");
		}
		setFrequency(newfrequency);
		setDropdownVal(time);
	};

	const handleFinancialStatement = (statement) => {
		if (statement === "BALANCE_SHEET") {
			console.log(balanceSheet);
			setIncomeStatement(BalanceSheets);
			setFinancialStatement(statement);
		} else if (statement === "CASH_FLOW") {
			setIncomeStatement(CashFlows);
			setFinancialStatement(statement);
		} else {
			setIncomeStatement(IncomeStatement);
			setFinancialStatement(statement);
		}
	};

	return (
		<StockContext.Provider
			value={{
				isLoading,
				stockData,
				setFrequency,
				frequency,
				dropdownVal,
				setDropdownVal,
				handleChange,
				incomeStatement,
				financialStatement,
				cashFlows,
				setFinancialStatement,
				error,
				label,
				handleFinancialStatement,
				dates,
				setDates,
			}}>
			{children}
		</StockContext.Provider>
	);
};

const useGlobalContext = () => {
	return useContext(StockContext);
};

export { StockProvider, useGlobalContext };
