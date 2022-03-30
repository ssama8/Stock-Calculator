// Step 1 - Include react
import React from "react";

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { useGlobalContext } from "../../context/context";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Preparing the chart data

const LineChart = ({ data, range }) => {
	const { label } = useGlobalContext();
	const { min, max } = range;
	// Create a JSON object to store the chart configurations
	const chartConfigs = {
		type: "line", // The chart type
		height: "400", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				// caption: `Stock Prices (${label})`, //Set the chart caption
				// subCaption: "In USD ($)", //Set the chart subcaption
				xAxisName: "Dates", //Set the x-axis name
				yAxisName: "Price Per Share", //Set the y-axis name
				yAxisMinValue: `${min}`,
				theme: "fusion", //Set the theme for your chart

				showBorder: "0",
				// showShadow: "0",
				showCanvasBorder: "10",
				// legendBorderAlpha: "0",
				// showAxisLines: "0",
				// showAlternateHGridColor: "0",
				divlineThickness: "1",
			},
			// Chart Data - from step 2
			data: data,
		},
	};

	return <ReactFC {...chartConfigs} className='stock-chart' />;
};

export default LineChart;
