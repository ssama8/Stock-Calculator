import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/context.js";
import IncomeChart from "./Charts/IncomeChart";
const IncomeStatements = () => {
	const {
		incomeStatement,
		financialStatement,
		setFinancialStatement,
		error,
		handleFinancialStatement,
	} = useGlobalContext();

	const [allRows, setAllRows] = useState([]);
	const [rows, setRows] = useState([]);
	const [hidden, setHidden] = useState(false);
	useEffect(() => {
		const arr = loopThroughKeys(incomeStatement);
		setAllRows(arr);
		if (rows.length > 0) {
			setRows(arr.slice(0, rows.length));
		} else {
			setRows(arr.slice(0, 10));
		}
		// setAllRows(loopThroughKeys(incomeStatement));
		// const totalRows = [...allRows].slice(0, 10);
	}, [incomeStatement]);
	const loopThroughKeys = (arr) => {
		console.log(arr);
		let refactoredArr = [];
		for (const key in arr[0]) {
			refactoredArr.push(key);
		}
		return refactoredArr.map((row, idx) => {
			return (
				<>
					{arr[0][row] !== "None" ? (
						<tr key={new Date().getTime().toString()}>
							<td>{row}</td>
							{arr.map((obj, objx) => {
								let valClass;
								let val = obj[row];
								let inMils = (val / Math.pow(10, 6)).toFixed();
								if (idx > 1) {
									valClass = valClass = checkAverage(arr, row, inMils);
								}
								inMils = inMils.toString();

								return (
									<td key={objx} className={valClass}>
										{inMils !== "NaN" ? inMils : val}
									</td>
								);
							})}
							{idx === 0 && <td className='average-display'>Average </td>}
							{idx === 1 && <td className='average-display'>USD</td>}
							{idx > 1 && addSameKeys(arr, row)}
						</tr>
					) : null}
				</>
			);
		});
	};

	const checkAverage = (arr, key, value) => {
		let total = 0;
		arr.map((obj) => {
			total += parseInt(obj[key]);
		});
		total = total / Math.pow(10, 6);
		total = (total / arr.length).toFixed(0);

		return parseInt(value) > total ? "more-background" : "less-background";
	};

	const addSameKeys = (arr, key) => {
		let sum = 0;
		arr.map((obj) => {
			sum += parseInt(obj[key]);
		});
		const total = sum / Math.pow(10, 6);
		return (
			<td className='average-display'>{(total / arr.length).toFixed(0)}</td>
		);
	};

	// useEffect(() => {
	// 	// setAllRows(loopThroughKeys(incomeStatement));
	// 	const totalRows = [...allRows];
	// 	setRows(totalRows.slice(0, 10));
	// }, [incomeStatement]);
	if (error.error) {
		return <h1>{error.msg}</h1>;
	}

	const addMoreRows = () => {
		let currentRows = rows.length;
		const totalRows = [...allRows];
		setRows(totalRows.slice(0, currentRows + 5));
	};
	const hideRows = () => {
		let currentRows = rows.length;
		const totalRows = [...allRows];
		setRows(totalRows.slice(0, currentRows - 5));
	};
	// if (incomeStatement.length === 0) {
	// 	return <h1>Can't get charts</h1>;
	// }

	// console.log(loopThroughKeys(incomeStatement));
	return (
		<>
			<section className='financial-data'>
				<button className='hide-btn btn' onClick={() => setHidden(!hidden)}>
					{!hidden ? "Hide Financial Statements" : "Show Financial Statements "}
				</button>

				{!hidden && (
					<>
						<ul className='financial-statement-tabs'>
							<li onClick={(e) => handleFinancialStatement("INCOME_STATEMENT")}>
								Income
							</li>
							<li onClick={(e) => handleFinancialStatement("BALANCE_SHEET")}>
								Balance
							</li>
							<li onClick={(e) => handleFinancialStatement("CASH_FLOW")}>
								Cash Flows
							</li>
						</ul>

						<table>
							<tbody>{rows}</tbody>
						</table>

						{rows.length < allRows.length && rows.length !== 0 && (
							<button onClick={addMoreRows} className='read-more btn'>
								Get More Data
							</button>
						)}
						{rows.length > 8 && (
							<button onClick={hideRows} className='read-less btn'>
								Get Less Data
							</button>
						)}
					</>
				)}
			</section>
		</>
	);
};

export default IncomeStatements;
