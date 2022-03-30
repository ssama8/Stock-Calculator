let incomeStatement = [
	{
		fiscalDateEnding: "2021-12-31",
		reportedCurrency: "USD",
		grossProfit: "13606000000",
		totalRevenue: "53823000000",
		costOfRevenue: "40217000000",
		costofGoodsAndServicesSold: "374000000",
		operatingIncome: "6523000000",
		sellingGeneralAndAdministrative: "4517000000",
		researchAndDevelopment: "2593000000",
		operatingExpenses: "7083000000",
		investmentIncomeNet: "56000000",
		netInterestIncome: "-371000000",
		interestIncome: "56000000",
		interestExpense: "371000000",
		nonInterestIncome: "-55000000",
		otherNonOperatingIncome: "135000000",
		depreciation: "1910000000",
		depreciationAndAmortization: "466000000",
		incomeBeforeTax: "6218000000",
		incomeTaxExpense: "699000000",
		interestAndDebtExpense: "371000000",
		netIncomeFromContinuingOperations: "5644000000",
		comprehensiveIncomeNetOfTax: "5210000000",
		ebit: "6589000000",
		ebitda: "7055000000",
		netIncome: "5519000000",
	},
	{
		fiscalDateEnding: "2020-12-31",
		reportedCurrency: "USD",
		grossProfit: "6630000000",
		totalRevenue: "31536000000",
		costOfRevenue: "24906000000",
		costofGoodsAndServicesSold: "289000000",
		operatingIncome: "1994000000",
		sellingGeneralAndAdministrative: "3145000000",
		researchAndDevelopment: "1491000000",
		operatingExpenses: "4636000000",
		investmentIncomeNet: "30000000",
		netInterestIncome: "-748000000",
		interestIncome: "30000000",
		interestExpense: "748000000",
		nonInterestIncome: "-336000000",
		otherNonOperatingIncome: "-122000000",
		depreciation: "1570000000",
		depreciationAndAmortization: "399000000",
		incomeBeforeTax: "1013000000",
		incomeTaxExpense: "292000000",
		interestAndDebtExpense: "853000000",
		netIncomeFromContinuingOperations: "862000000",
		comprehensiveIncomeNetOfTax: "1120000000",
		ebit: "1761000000",
		ebitda: "2160000000",
		netIncome: "721000000",
	},
	{
		fiscalDateEnding: "2019-12-31",
		reportedCurrency: "USD",
		grossProfit: "4069000000",
		totalRevenue: "24578000000",
		costOfRevenue: "20509000000",
		costofGoodsAndServicesSold: "193000000",
		operatingIncome: "-69000000",
		sellingGeneralAndAdministrative: "2646000000",
		researchAndDevelopment: "1343000000",
		operatingExpenses: "4138000000",
		investmentIncomeNet: "44000000",
		netInterestIncome: "-685000000",
		interestIncome: "44000000",
		interestExpense: "685000000",
		nonInterestIncome: "-98000000",
		otherNonOperatingIncome: "45000000",
		depreciation: "1370000000",
		depreciationAndAmortization: "343000000",
		incomeBeforeTax: "-752000000",
		incomeTaxExpense: "110000000",
		interestAndDebtExpense: "685000000",
		netIncomeFromContinuingOperations: "-775000000",
		comprehensiveIncomeNetOfTax: "-890000000",
		ebit: "-67000000",
		ebitda: "276000000",
		netIncome: "-862000000",
	},
	{
		fiscalDateEnding: "2018-12-31",
		reportedCurrency: "USD",
		grossProfit: "4042000000",
		totalRevenue: "21461000000",
		costOfRevenue: "17419000000",
		costofGoodsAndServicesSold: "85272000",
		operatingIncome: "-388000000",
		sellingGeneralAndAdministrative: "2835000000",
		researchAndDevelopment: "1460000000",
		operatingExpenses: "4430000000",
		investmentIncomeNet: "24533000",
		netInterestIncome: "-663071000",
		interestIncome: "-71000",
		interestExpense: "663000000",
		nonInterestIncome: "22184879000",
		otherNonOperatingIncome: "22000000",
		depreciation: "1110000000",
		depreciationAndAmortization: "66000000",
		incomeBeforeTax: "-918000000",
		incomeTaxExpense: "58000000",
		interestAndDebtExpense: "663071000",
		netIncomeFromContinuingOperations: "-1062582000",
		comprehensiveIncomeNetOfTax: "-1018000000",
		ebit: "-255000000",
		ebitda: "-189000000",
		netIncome: "-976000000",
	},
	{
		fiscalDateEnding: "2017-12-31",
		reportedCurrency: "USD",
		grossProfit: "2223000000",
		totalRevenue: "11759000000",
		costOfRevenue: "9536000000",
		costofGoodsAndServicesSold: "7797183000",
		operatingIncome: "-1632000000",
		sellingGeneralAndAdministrative: "2477000000",
		researchAndDevelopment: "1378000000",
		operatingExpenses: "3855000000",
		investmentIncomeNet: "19686000",
		netInterestIncome: "-471259000",
		interestIncome: "-259000",
		interestExpense: "471000000",
		nonInterestIncome: "948469000",
		otherNonOperatingIncome: "-125000000",
		depreciation: "769000000",
		depreciationAndAmortization: "1636003000",
		incomeBeforeTax: "-1930000000",
		incomeTaxExpense: "32000000",
		interestAndDebtExpense: "471259000",
		netIncomeFromContinuingOperations: "-2240578000",
		comprehensiveIncomeNetOfTax: "-1905000000",
		ebit: "-1459000000",
		ebitda: "177003000",
		netIncome: "-1962000000",
	},
];

incomeStatement = incomeStatement.map((year) => {
	let string = JSON.stringify(year);
	return JSON.parse(string);
});

export default incomeStatement;
