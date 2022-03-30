import React from "react";
import StockChart from "../compontents/StockChart";
import IncomeStatements from "../compontents/IncomeStatements.js";
import Footer from "../compontents/Footer";
import Navbar from "../compontents/Navbar";
import Transaction from "../compontents/Transaction";
import BuyWidget from "../compontents/BuyWidget";
import SearchBar from "../compontents/SearchBar";
import StockValueToday from "../compontents/StockValueToday";
const Dashboard = () => {
	return (
		<>
			<Navbar />
			<SearchBar />
			<StockChart />

			<Transaction />
			<StockValueToday />
			<Footer />
		</>
	);
};

export default Dashboard;
