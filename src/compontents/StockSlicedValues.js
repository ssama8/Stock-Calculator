import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import styled from "styled-components";
import { TiBusinessCard } from "react-icons/ti";
import { MdUpdate } from "react-icons/md";
import { FaCalendarTimes } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
const StockSlicedValues = ({
	label,
	startPoint,
	endPoint,
	change,
	dropdownVal,
	percent,
	test,
}) => {
	return (
		<Wrapper className='values'>
			<div className='value-container'>
				<TiBusinessCard className='icon' />
				<div className='value-text'>
					<h3>{label}</h3>
					<p>Stock </p>
				</div>
			</div>
			<div className='value-container hide-value'>
				<MdUpdate className='icon' />
				<div className='value-text'>
					<h3>${startPoint}</h3>
					{test && <p>{test[0].label} </p>}
				</div>
			</div>
			<div className='value-container hide-value'>
				<FaCalendarTimes className='icon' />
				<div className='value-text'>
					<h3>${endPoint}</h3>
					{test && <p> {test[test.length - 1].label} </p>}
				</div>
			</div>
			<div className='value-container'>
				<AiOutlineStock className='icon' />
				<div className='value-text'>
					<p>${change}</p>
					<p>Change In Price </p>
				</div>
			</div>
			<div className='value-container'>
				<AiOutlineStock className='icon' />
				<p>
					{change > 0 ? <FaArrowUp /> : <FaArrowDown />}
					{percent}%{dropdownVal !== " all time " && " past "} {dropdownVal}
				</p>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.section`
	.value-container {
		display: grid;
		grid-template-columns: 1fr 3fr;
		text-align: center;
		padding: 0.5;
		background-color: rgb(255, 255, 133);

		border: 1px solid #bbb;
		border-radius: 10px;
		.value-text {
			padding: 0.5rem;
			align-self: center;
			justify-self: center;
		}
		h3 {
			margin: 0.5rem 0;
		}
		.icon {
			font-size: 2.5rem;
			justify-self: center;
			color: green;
			align-self: center;
			border-radius: 50%;
		}
		p {
			font-size: 1rem;
			font-weight: bold;
			align-self: center;
		}
	}
	@media screen and (max-width: 600px) {
		.hide-value {
			display: none;
		}
	}
`;
export default StockSlicedValues;
